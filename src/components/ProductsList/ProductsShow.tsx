import ProductCard from "./ProductCard.js";
import "../../css/ProductListingPage.css";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client/react";
import { GET_PRODUCTS } from "../../utils/queries.js";
import CardsPlaceHolder from "../Placeholders/CardsPlaceHolder.js";
import type { Product } from "../../utils/Types.js";
import type { JSX } from "react";

interface ProductsData {
  products: Product[];
}

const ProductsShow = (): JSX.Element => {
  const { category } = useParams();

  const { data, loading, error } = useQuery<ProductsData>(GET_PRODUCTS, {
    variables: { category },
  });

  if (loading) {
    return <CardsPlaceHolder />;
  }

  if (error) {
    throw error;
  }

  const { products } = data!;

  return (
    <div className="container product">
      <h2 style={{ fontFamily: "Raleway", textTransform: "capitalize" }}>
        {category}
      </h2>
      <div className="row" style={{ paddingBottom: "50px", rowGap: "50px" }}>
        {products.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsShow;
