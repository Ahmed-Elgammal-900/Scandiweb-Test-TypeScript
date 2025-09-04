import "bootstrap/dist/css/bootstrap.css";
import "../../css/Navbar.css"
import ShoppingCart from "../ShoppingCart/shoppingCart.js";
import Navigation from "./Navigation.js";
import ShoppingCartButton from "./ShoppingCartButton.js";
import brand from "../../assets/brand-icon.svg";
import type { JSX } from "react";

const NavBar = (): JSX.Element => {
  return (
    <nav
      className="d-flex justify-content-between mt-4 position-relative"
      style={{ paddingBottom: "15px", backgroundColor: "white" }}
    >
      <Navigation />
      <img
        src={brand}
        alt="logo"
        className="position-absolute start-50 translate-middle"
        style={{ top: "0.7rem" }}
      />
      <ShoppingCartButton />
      <ShoppingCart />
    </nav>
  );
};

export default NavBar;
