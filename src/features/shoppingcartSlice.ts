import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductCart, SelectedOptions } from "../utils/Types";
import type { RootState } from "../app/store";
import { sendShoppingCart } from "./muatationAsyncThunk";

interface ProductParam {
  id: string;
  selectedOptions: SelectedOptions;
}

interface InitialState {
  products: ProductCart[];
  isLoadingSubmission: boolean;
  response: string;
  showCart: boolean;
}

const loadFromLoacalStorage = (): ProductCart[] => {
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

const initialState: InitialState = {
  products: loadFromLoacalStorage(),
  isLoadingSubmission: false,
  response: "",
  showCart: false,
};

const areItemsSame = (
  id1: string,
  selectedOptions1: SelectedOptions,
  id2: string,
  selectedOptions2: SelectedOptions
) => {
  return (
    id1 === id2 &&
    Object.keys(selectedOptions1).every(
      (key) => selectedOptions1[key] === selectedOptions2[key]
    )
  );
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<ProductCart & { fromProductPage?: boolean }>
    ) => {
      const {
        product,
        selectedOptions,
        fromProductPage = false,
      } = action.payload;
      const { id } = product;

      const existingItemIndex = state.products.findIndex(
        ({ product: { id: existingId }, selectedOptions: existingOptions }) =>
          areItemsSame(id, selectedOptions, existingId, existingOptions)
      );

      if (existingItemIndex !== -1) {
        state.products[existingItemIndex].product.count += 1;
      } else {
        state.products.push({ product, selectedOptions });
      }

      if (fromProductPage) {
        state.showCart = true;
      }
    },

    increment: (state, action: PayloadAction<ProductParam>) => {
      const { id: productID, selectedOptions } = action.payload;

      const itemIndex = state.products.findIndex(
        ({ product: { id }, selectedOptions: existingOptions }) =>
          areItemsSame(productID, selectedOptions, id, existingOptions)
      );

      if (itemIndex !== -1) {
        state.products[itemIndex].product.count += 1;
      }
    },

    decrement: (state, action: PayloadAction<ProductParam>) => {
      const { id: productID, selectedOptions } = action.payload;

      const itemIndex = state.products.findIndex(
        ({ product: { id }, selectedOptions: existingOptions }) =>
          areItemsSame(productID, selectedOptions, id, existingOptions)
      );

      if (itemIndex !== -1) {
        const item = state.products[itemIndex];
        item.product.count -= 1;
        if (item.product.count === 0) {
          state.products.splice(itemIndex, 1);
        }
      }
    },

    setShowCart: (state) => {
      state.showCart = !state.showCart;
      if (state.response) {
        state.response = "";
      }
    },
  },

  extraReducers(builder) {
    builder.addCase(sendShoppingCart.pending, (state) => {
      state.isLoadingSubmission = true;
    });
    builder.addCase(sendShoppingCart.fulfilled, (state, action) => {
      state.response = action.payload;
      state.isLoadingSubmission = false;
      state.products = [];
    });
    builder.addCase(sendShoppingCart.rejected, (state, action) => {
      if (action.payload) {
        state.response = action.payload.error;
      } else {
        state.response = action.error.message ?? "Unknown error";
      }
      state.isLoadingSubmission = false;
    });
  },
});

export default shoppingCartSlice.reducer;

export const { setShowCart, addToCart, increment, decrement } =
  shoppingCartSlice.actions;

export const selectShowCart = (state: RootState) => state.shoppingcart.showCart;
export const selectResponse = (state: RootState) => state.shoppingcart.response;
export const selectIsLoadingSubmission = (state: RootState) =>
  state.shoppingcart.isLoadingSubmission;
export const selectProducts = (state: RootState) =>
  state.shoppingcart.products;
export const selectProductsCount = (state: RootState) =>
  state.shoppingcart.products.reduce(
    (total, { product: { count } }) => total + count,
    0
  );

export const selectTotalPrice = (state: RootState) =>
  state.shoppingcart.products
    .reduce(
      (
        total,
        {
          product: {
            count,
            prices: { amount },
          },
        }
      ) => total + amount * count,
      0
    )
    .toFixed(2);
