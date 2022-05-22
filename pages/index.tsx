import { useContext, useState } from "react";
import { ethers } from "ethers";
import { Erc20__factory } from "../contracts/types";
import { Maybe } from "@metamask/providers/dist/utils";
import { Button } from "@mui/material";

const Index = () => {
  const { state: appState, setState: setAppState } = useContext(AppContext);

  const [tokenBalance, setTokenBalance] = useState<string>();
  const [tokenAddress, setTokenAddress] = useState<string>();
  const { provider, account } = appState;

  const connect = async () => {
    if (!window.ethereum?.request) {
      alert("MetaMask is not installed!");
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const provider = new ethers.providers.Web3Provider(window.ethereum as any);
    const accounts: Maybe<string[]> = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    if (!accounts || !accounts[0]) {
      alert("MetaMask is not installed!");
      return;
    }
    console.log(accounts[0], provider);

    setAppState({
      account: accounts[0],
      provider,
    });
    console.log("saved stuff", account, provider);
  };

  const getTokenBalance = async () => {
    if (!provider || !account) {
      alert("Error: Account not connected!");
      return;
    }
    if (!tokenAddress) {
      alert("Error: Token address is empty!");
      return;
    }

    // This might not exist, so we need to use ´npm typechain´ to generate it
    const token = Erc20__factory.connect(tokenAddress, provider.getSigner());

    const rawBalance = await token.balanceOf(account);
    const decimals = await token.decimals();

    const balance = ethers.utils.formatUnits(rawBalance, decimals);
    setTokenBalance(balance);
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={connect}
        disabled={account ? true : false}
      >
        Connect
      </Button>
      <Button variant="contained" onClick={getTokenBalance}>
        Get Token Balance
      </Button>
      <p>Account: {account}</p>
      <button onClick={getTokenBalance}>Get Token Balance</button>
      <p>Token Balance: {tokenBalance}</p>
      <p>Token address:</p>
      <input type="text" onChange={(e) => setTokenAddress(e.target.value)} />
    </>
  );
};

export default Index;

import { MetaMaskInpageProvider } from "@metamask/providers";
import { AppContext } from "../context/state";
declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}
