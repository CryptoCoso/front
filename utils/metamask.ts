import { MetaMaskInpageProvider } from "@metamask/providers";
import { Maybe } from "@metamask/providers/dist/utils";
import { ethers } from "ethers";
import { Erc20__factory } from "../contracts/types";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

export const getTokenBalance = async (
  provider: ethers.providers.Web3Provider | undefined,
  account: string | undefined,
  tokenAddress: string | undefined
): Promise<string> => {
  if (!provider || !account) {
    throw Error("No provider or account");
  }
  if (!tokenAddress) {
    throw Error("No token address");
  }

  // This might not exist, so we need to use ´npm typechain´ to generate it
  const token = Erc20__factory.connect(tokenAddress, provider.getSigner());

  const rawBalance = await token.balanceOf(account);
  const decimals = await token.decimals();

  const balance = ethers.utils.formatUnits(rawBalance, decimals);
  return balance;
};

export const connectToMetamask: () => Promise<ConnectResult> = async () => {
  if (!window.ethereum?.request) {
    throw Error("MetaMask is not installed!");
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const provider = new ethers.providers.Web3Provider(window.ethereum as any);
  const accounts: Maybe<string[]> = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  if (!accounts || !accounts[0]) {
    throw Error("MetaMask is not installed!");
  }
  console.log(accounts[0], provider);

  return {
    account: accounts[0],
    provider,
  };
};

interface ConnectResult {
  account: string;
  provider: ethers.providers.Web3Provider;
}
