import ItemInfo from "./ItemInfo";
import ItemImage from "./ItemImage";
import type { JSX } from "react";

const CartItem = (): JSX.Element => {
  return (
    <div className="fields">
      <ItemInfo />
      <ItemImage />
    </div>
  );
};

export default CartItem;
