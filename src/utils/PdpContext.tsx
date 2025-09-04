import { createContext, useContext } from "react";
import type { PdpContextType } from "./Types";
export const PdpContext = createContext<PdpContextType | undefined>(undefined);

export const usePdpContext = () => {
  const context = useContext(PdpContext);

  if (!context) {
    throw Error("undefined context");
  }

  return context;
};
