import type { ProductCart } from "./Types";
export const loadFromLocalStorage = (): ProductCart[] => {
  try {
    const data = localStorage.getItem("products");
    if (!data) {
      return [];
    }
    return JSON.parse(data);
  } catch (error) {
    console.error("Failed to load localStorage", error);
    return [];
  }
};