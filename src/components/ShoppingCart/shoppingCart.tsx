import "../../css/ShoppingCart.css";
import CartInfo from "./CartInfo.js";
import CartHeader from "./CartHeader.js";
import CartTotal from "./CartTotal.js";
import CartButton from "./CartButton.js";
import ResponseMassege from "./ResponseMassege.js";
import { useAppSelector } from "../../app/hooks.js";
import { selectShowCart } from "../../features/shoppingcartSlice.js";

const ShoppingCart = () => {
  const showCart = useAppSelector(selectShowCart);
  return (
    <div
      className={showCart ? "showing-cart" : "cart"}
      data-testid="cart-overlay"
    >
      <CartHeader />
      <CartInfo />
      <ResponseMassege />
      <CartTotal />
      <CartButton />
    </div>
  );
};

export default ShoppingCart;
