import type { JSX } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectTotalPrice } from "../../features/shoppingcartSlice";

const CartTotal = (): JSX.Element => {
  const totalPrice = useAppSelector(selectTotalPrice);
  return (
    <p className="cart-total-text" data-testid="cart-total">
      Total: <span>${totalPrice}</span>
    </p>
  );
};

export default CartTotal;
