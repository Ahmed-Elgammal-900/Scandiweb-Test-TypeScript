import { type JSX } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectProductsCount } from "../../features/shoppingcartSlice";

const CartHeader = (): JSX.Element => {
  const count = useAppSelector(selectProductsCount);
  return (
    <h3 style={{ fontSize: "16px", fontFamily: "Raleway" }}>
      <span style={{ fontWeight: "bold" }}>My Bag</span>, {count} items
    </h3>
  );
};

export default CartHeader;
