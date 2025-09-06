import CartItemsControls from "./CartItemsControls";
import { useInnerCartContext } from "../../utils/InnerCartContext";
import type { JSX } from "react";

const ItemImage = (): JSX.Element => {
  const {
    obj: {
      product: {
        gallery: [firstImage],
      },
    },
  } = useInnerCartContext();
  return (
    <div className="image">
      <CartItemsControls />
      <img src={firstImage} alt="image" />
    </div>
  );
};

export default ItemImage;
