import Attribute from "./Attribute";
import { useInnerCartContext } from "../../utils/InnerCartContext";
import ProductName from "./ProductName";
import type { JSX } from "react";

const ItemInfo = (): JSX.Element => {
  const {
    obj: {
      product: { attributes },
      selectedOptions,
    },
  } = useInnerCartContext();
  return (
    <div className="swatches">
      <ProductName />
      {attributes.map((attribute) => {
        const { id } = attribute;
        return (
          <Attribute
            attribute={attribute}
            selectedOptions={selectedOptions}
            key={id + selectedOptions[id]}
          />
        );
      })}
    </div>
  );
};

export default ItemInfo;
