import { createContext, useContext } from "react";
import { type GalleryContextType } from "./Types";
export const GalleryContext = createContext<GalleryContextType | undefined>(
  undefined
);

export const useGalleryContext = () => {
  const context = useContext(GalleryContext);

  if (!context) {
    throw Error("undefined Context");
  }

  return context
};
