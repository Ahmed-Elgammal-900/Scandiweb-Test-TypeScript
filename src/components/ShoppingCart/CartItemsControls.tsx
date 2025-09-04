import { type JSX } from "react";
import { useInnerCartContext } from "../../utils/InnerCartContext";
import { useAppDispatch } from "../../app/hooks";
import { decrement, increment } from "../../features/shoppingcartSlice";

const CartItemsControls = (): JSX.Element => {
  const {
    obj: {
      product: { count, id },
      selectedOptions,
    },
  } = useInnerCartContext();
  const dispatch = useAppDispatch();

  return (
    <div className="buttons">
      <button
        onClick={() => dispatch(increment({ id, selectedOptions }))}
        data-testid="cart-item-amount-increase"
      >
        +
      </button>
      <p
        style={{ textAlign: "center", marginBottom: 0 }}
        data-testid="cart-item-amount"
      >
        {count}
      </p>
      <button
        onClick={() => dispatch(decrement({ id, selectedOptions }))}
        data-testid="cart-item-amount-decrease"
      >
        -
      </button>
    </div>
  );
};

export default CartItemsControls;
