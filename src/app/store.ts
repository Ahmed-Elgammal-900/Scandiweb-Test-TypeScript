import { configureStore } from "@reduxjs/toolkit";
import shoppingcartReducer from "../features/shoppingcartSlice";
import { localStorageSyncMiddleware } from "../features/localstorageMiddleware";

export const store = configureStore({
  reducer: { shoppingcart: shoppingcartReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageSyncMiddleware),
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
