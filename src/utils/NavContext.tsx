import { createContext } from "react";
import type { Categories } from "./Types";
export const NavContext = createContext<Categories>({ categories: [] });
