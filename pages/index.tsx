import { useContext, useState } from "react";
import ipfs from 'ipfs'

const Index = () => {
  const { state: appState, setState: setAppState } = useContext(AppContext);

  const [tokenBalance, setTokenBalance] = useState<string>();
  const [tokenAddress, setTokenAddress] = useState<string>();
  const { provider, account } = appState;
  const [meta, setMeta] = useState<string>("No metadata yet");

  const getMeta = async () => {
    // const IPFS = ipfs.()
    // const meta = ipfs.urlSource('QmcXuh9t39hQjvQeDM9zByUaRQRVEtUw47pLnt7NUjcRib');
    // setMeta(JSON.stringify(meta));
  };

  return (
    <>
      <p>Account: {account}</p>
      {/* <button onClick={getTokenBalance}>Get Token Balance</button> */}
      <p>Token Balance: {tokenBalance}</p>
      <p>Token address:</p>
      <input type="text" onChange={(e) => setTokenAddress(e.target.value)} />
      <button onClick={getMeta}>Get Metadata</button>
      <code lang="json">{meta}</code>
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
