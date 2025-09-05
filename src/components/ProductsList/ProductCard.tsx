import ProductImg from "./ProductImg";
import ProductInfo from "./ProductInfo";
import AddToCart from "./AddToCart";
import { useNavigate } from "react-router";
import type { JSX } from "react";
import type { ProductData } from "../../utils/Types";

const ProductCard = ({ product }: ProductData): JSX.Element => {
  const navigate = useNavigate();
  const handleProductClick = (productId: string) => {
    navigate(`${productId}`);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const {
    id,
    name,
    instock,
    gallery: [firstImage],
    prices: {
      amount,
      currency: { symbol },
    },
  } = product;
  return (
    <div
      className={instock == "false" ? "col-4 Card out-of-stock" : "col-4 Card"}
      onClick={() => handleProductClick(id)}
      data-testid={`product-${name.toLowerCase().split(" ").join("-")}`}
    >
      <ProductImg firstImage={firstImage} instock={instock} />
      <ProductInfo
        name={name}
        instock={instock}
        symbol={symbol}
        amount={amount}
      />
      <AddToCart product={product} />
      <p className={instock == "false" ? "out-of-stock" : ""}>out of stock</p>
    </div>
  );
};

export default ProductCard;
