import type { JSX } from "react";
import type { AttributeInfo } from "../../utils/Types";
import PDPItem from "./PDPItem";

interface ElementProps {
  attribute: AttributeInfo;
}
const PDPAttribute = ({ attribute }: ElementProps): JSX.Element => {
  const { name, items } = attribute;
  return (
    <div
      className="field"
      data-testid={`product-attribute-${name
        .toLowerCase()
        .split(" ")
        .join("-")}`}
    >
      <h4>{name}:</h4>
      <div className="swatch">
        {items.map((item, index) => (
          <PDPItem
            key={item.id}
            item={item}
            index={index}
            attribute={attribute}
          />
        ))}
      </div>
    </div>
  );
};

export default PDPAttribute;
