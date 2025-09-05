import { memo, type JSX } from "react";
import PDPAttribute from "./PDPAttribute";
import ProductPrice from "./ProductPrice";
import HtmlParser from "../../utils/HTMLParser";
import AddToCart from "./AddToCart";
import type { AttributeInfo } from "../../utils/Types";

type ElementProps = {
  name: string;
  attributes: AttributeInfo[];
  description: string;
};

const Info = memo(
  ({ name, attributes, description }: ElementProps): JSX.Element => {
    return (
      <div className="info">
        <h2>{name}</h2>
        {attributes.map((attribute) => (
          <PDPAttribute attribute={attribute} key={attribute.id} />
        ))}
        <ProductPrice />
        <AddToCart />
        <div style={{ width: "292px", fontFamily: "Roboto" }}>
          {<HtmlParser htmlString={description} />}
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.name === nextProps.name &&
      JSON.stringify(prevProps.attributes) ===
        JSON.stringify(nextProps.attributes) &&
      prevProps.description === nextProps.description
    );
  }
);

export default Info;
