import type { JSX } from "react";

const ProductCardPlaceholder = (): JSX.Element => {
  return (
    <div
      className="col-4 placeholder-wave"
      style={{ height: "450px", cursor: "default" }}
    >
      <div
        className="image placeholder h-75 col-12"
        style={{ opacity: "0.3" }}
      ></div>

      <span
        className="placeholder col-5 mt-3"
        style={{ opacity: "0.3" }}
      ></span>

      <span
        className="placeholder col-8 mt-1"
        style={{ opacity: "0.3" }}
      ></span>
    </div>
  );
};

export default ProductCardPlaceholder;
