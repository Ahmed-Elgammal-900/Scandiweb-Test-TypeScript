import { createAppAsyncThunk } from "../app/asyncThunk";
import { client } from "../utils/ApolloClient";
import { SEND_PRODUCTS } from "../utils/queries";
import { selectProducts } from "./shoppingcartSlice";

type MutationResponse = {
  createOrders: string;
};

export const sendShoppingCart = createAppAsyncThunk<
  string,
  void,
  { rejectValue: { error: string } }
>("shoppingcart/sendData", async (_, ThunkApi) => {
  try {
    const products = selectProducts(ThunkApi.getState());

    const ItemInput = products.map(
      ({
        product: {
          id,
          count,
          prices: {
            amount,
            currency: { label },
          },
          category,
        },
        selectedOptions,
      }) => ({
        id,
        count,
        price: amount,
        category,
        label,
        selectedOptions: JSON.stringify(selectedOptions),
      })
    );
    const { data } = await client.mutate<MutationResponse>({
      mutation: SEND_PRODUCTS,
      variables: { ItemInput },
    });
    if (!data?.createOrders) {
      return ThunkApi.rejectWithValue({ error: "order failed" });
    }
    return data.createOrders;
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return ThunkApi.rejectWithValue({ error: error.toString() });
    } else {
      return ThunkApi.rejectWithValue({ error: "unexpected error" });
    }
  }
});
