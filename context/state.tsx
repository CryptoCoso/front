import { ethers } from "ethers";
import React, { ReactNode } from "react";

export function createCtx<A>(defaultValue: A) {
  type UpdateType = React.Dispatch<React.SetStateAction<typeof defaultValue>>;
  const defaultUpdate: UpdateType = () => defaultValue;
  const ctx = React.createContext({
    state: defaultValue,
    setState: defaultUpdate,
  });
  const Provider = (props: { children: ReactNode }) => {
    const [state, setState] = React.useState(defaultValue);
    return (
      <ctx.Provider value={{ state, setState }}>{props.children}</ctx.Provider>
    );
  };
  return [ctx, Provider] as const; // alternatively, [typeof ctx, typeof Provider]
}

interface AppContextInterface {
  account?: string;
  provider?: ethers.providers.Web3Provider;
}

const [ctx, AppContextProvider] = createCtx<AppContextInterface>({});
export const AppContext = ctx;

export const AppWrapper: React.FC = ({ children }) => {
  return <AppContextProvider> {children} </AppContextProvider>;
};
