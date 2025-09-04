import type { Middleware } from "@reduxjs/toolkit";
import { addToCart, increment, decrement } from "./shoppingcartSlice";
import { sendShoppingCart } from "./muatationAsyncThunk";

export const localStorageSyncMiddleware: Middleware =
  (storeAPI) => (next) => (action) => {
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
          "shoppingCart",
          JSON.stringify(state.shoppingcart.products)
        );
      } catch (err) {
        console.warn("Failed to sync cart to localStorage", err);
      }
    }

    return result;
  };
