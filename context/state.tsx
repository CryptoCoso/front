import { ethers } from "ethers";
import React, { Props, ReactElement, ReactNode } from "react";

export function createCtx<A>(defaultValue: A) {
  type UpdateType = React.Dispatch<React.SetStateAction<typeof defaultValue>>;
  const defaultUpdate: UpdateType = () => defaultValue;
  const ctx = React.createContext({
    state: defaultValue,
    setState: defaultUpdate,
  });
  function Provider(props: React.PropsWithChildren<ReactNode>) {
    const [state, setState] = React.useState(defaultValue);
    return <ctx.Provider value={{ state, setState }}>{props}</ctx.Provider>;
  }
  return [ctx, Provider] as const; // alternatively, [typeof ctx, typeof Provider]
}

interface AppContextInterface {
  account?: string;
  provider?: ethers.providers.Web3Provider;
}

const [ctx, AppContextProvider] = createCtx<AppContextInterface>({});
export const AppContext = ctx;

export const AppWrapper = ({ children }: React.FC<Props>) => {
  return <AppContextProvider> {children} </AppContextProvider>;
};
