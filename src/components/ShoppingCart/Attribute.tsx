import type { JSX } from "react";
import ItemSelection from "./ItemSelection";
import type { AttributeInfo, SelectedOptions } from "../../utils/Types";
interface ElementProps {
  selectedOptions: SelectedOptions;
  attribute: AttributeInfo;
}
const Attribute = ({
  selectedOptions,
  attribute,
}: ElementProps): JSX.Element => {
  const { name, items, id } = attribute;
  return (
    <>
      <div
        className="field"
        data-testid={`cart-item-attribute-${name
          .toLowerCase()
          .split(" ")
          .join("-")}`}
      >
        <h6>{name}</h6>
        <div className="swatch shoppingCart">
          {items.map((item, index) => (
            <ItemSelection
              item={item}
              index={index}
              attribute={attribute}
              key={item.id + index + selectedOptions[id]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Attribute;
