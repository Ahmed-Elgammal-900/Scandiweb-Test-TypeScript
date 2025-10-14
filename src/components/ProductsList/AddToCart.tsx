import { type JSX, type MouseEvent } from "react";
import Cart from "../../assets/Empty Cart.svg";
import type { Product, SelectedOptions } from "../../utils/Types";
import { useAppDispatch } from "../../app/hooks";
import { addToCart } from "../../features/shoppingcartSlice";
import type { ProductData } from "../../utils/Types";

const AddToCart = ({ product }: ProductData): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (
    product: Product,
    event: MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    const selectedOptions: SelectedOptions = {};
    const data = { product: { ...product, count: 1 }, selectedOptions };
    product.attributes.forEach(
      ({ id, items: [{ value }] }) => (data.selectedOptions[id] = value)
    );
    dispatch(addToCart(data));
  };
  return (
    <button onClick={(event) => handleAddToCart(product, event)}>
      <img src={Cart} alt="Logo" />
    </button>
  );
};

export default AddToCart;
