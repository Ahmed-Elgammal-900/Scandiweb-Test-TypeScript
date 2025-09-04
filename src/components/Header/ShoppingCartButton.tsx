import { type JSX } from "react";
import Cart from "../../assets/shopping-cart.svg";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectProductsCount, setShowCart } from "../../features/shoppingcartSlice";

const ShoppingCartButton = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectProductsCount)

  return (
    <button
      className="button-shopping-cart position-relative"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      onClick={() => dispatch(setShowCart())}
      data-testid="cart-btn"
    >
      <img src={Cart} alt="logo" />
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-dark"
        style={{
          fontSize: "13px",
          fontWeight: "bold",
          top: "10%",
          padding: "5px 0 0 0",
          width: "23px",
          height: "23px",
          display: count == 0 ? "none" : "inline-block",
        }}
      >
        {count}
      </span>
    </button>
  );
};

export default ShoppingCartButton;
