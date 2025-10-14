import { createContext, useContext } from "react";
import type { ProductCart } from "./Types";

interface Context {
  obj: ProductCart;
  ind: number;
}

export const InnerCartContext = createContext<Context | undefined>(undefined);

export const useInnerCartContext = () => {
  const context = useContext(InnerCartContext);

  if (!context) {
    throw Error("undefined context");
  }

  return context;
};
