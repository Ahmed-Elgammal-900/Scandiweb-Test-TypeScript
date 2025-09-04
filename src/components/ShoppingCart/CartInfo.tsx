import CartItem from "./CartItem";
import { InnerCartContext } from "../../utils/InnerCartContext";
import { type JSX } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectResponse, selectProducts } from "../../features/shoppingcartSlice";

const CartInfo = (): JSX.Element => {
  const cartProducts = useAppSelector(selectProducts)
  const response = useAppSelector(selectResponse)
  return (
    <div
      className="content"
      style={{
        display: response ? "none" : "block",
      }}
    >
      {cartProducts.map((obj, ind) => (
        <InnerCartContext
          value={{ obj, ind }}
          key={obj.product.id + Object.values(obj.selectedOptions).join("-")}
        >
          <CartItem />
        </InnerCartContext>
      ))}
    </div>
  );
};

export default CartInfo;
