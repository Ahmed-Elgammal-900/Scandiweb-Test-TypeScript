import type {
  Dispatch,
  Middleware,
  MiddlewareAPI,
  UnknownAction,
} from "@reduxjs/toolkit";
import { addToCart, increment, decrement } from "./shoppingcartSlice";
import { sendShoppingCart } from "./muatationAsyncThunk";
import type { RootState } from "../app/store";

export const localStorageSyncMiddleware: Middleware =
  (storeAPI: MiddlewareAPI<Dispatch<UnknownAction>, RootState>) =>
  (next) =>
  (action) => {
    const result = next(action);

    const condition =
      addToCart.match(action) ||
      increment.match(action) ||
      decrement.match(action) ||
      sendShoppingCart.fulfilled.match(action);

    if (condition) {
      const state = storeAPI.getState();
      try {
        localStorage.setItem(
          "products",
          JSON.stringify(state.shoppingcart.products)
        );
      } catch (err) {
        console.warn("Failed to sync cart to localStorage", err);
      }
    }

    return result;
  };
