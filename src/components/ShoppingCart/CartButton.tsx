import { type JSX } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectIsLoadingSubmission,
  selectProductsCount,
} from "../../features/shoppingcartSlice";
import { sendShoppingCart } from "../../features/muatationAsyncThunk";

const CartButton = (): JSX.Element => {
  const isLoadingSubmission = useAppSelector(selectIsLoadingSubmission);
  const count = useAppSelector(selectProductsCount);
  const dispatch = useAppDispatch();
  return (
    <button
      className="place-order-button translate-middle text-light"
      disabled={count === 0 || isLoadingSubmission}
      onClick={() => dispatch(sendShoppingCart())}
    >
      {isLoadingSubmission ? (
        <span
          className="spinner-grow spinner-grow-sm"
          aria-hidden="true"
        ></span>
      ) : (
        "place order"
      )}
    </button>
  );
};

export default CartButton;
