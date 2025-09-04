import Attribute from "./Attribute";
import { useInnerCartContext } from "../../utils/InnerCartContext";
import ProductName from "./ProductName";

const ItemInfo = () => {
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
