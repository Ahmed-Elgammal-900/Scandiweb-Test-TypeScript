import type { JSX } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectShowCart } from "../../features/shoppingcartSlice";

const BackDrop = (): JSX.Element => {
  const showCart = useAppSelector(selectShowCart)
  return <div className={showCart ? "back-drop active" : "back-drop"}></div>;
};

export default BackDrop;
