import type { JSX } from "react";
import ProductCardPlaceholder from "./ProductCardPlaceholder";

const CardsPlaceHolder = (): JSX.Element => {
  const itemsIndex: string[] = new Array(6).fill("*");
  return (
    <div className="container product">
      <div className="row" style={{ paddingBottom: "50px", rowGap: "50px" }}>
        {itemsIndex.map((_, index) => (
          <ProductCardPlaceholder key={index} />
        ))}
      </div>
    </div>
  );
};

export default CardsPlaceHolder;
