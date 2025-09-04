import { useInnerCartContext } from "../../utils/InnerCartContext";
import type { AttributeInfo, Item } from "../../utils/Types";
interface ElementProps {
  item: Item;
  index: number;
  attribute: AttributeInfo;
}
const ItemSelection = ({
  item: { id: itemId, value, displayValue },
  index,
  attribute: { id: attributeId, name, type },
}: ElementProps) => {
  const {
    obj: {
      product: { id: productId },
      selectedOptions,
    },
    ind,
  } = useInnerCartContext();
  return (
    <>
      <input
        type="radio"
        value={value}
        name={
          name + "ShoppingCart" + productId + selectedOptions[attributeId] + ind
        }
        id={
          itemId == "Yes" || itemId == "No"
            ? name +
              itemId +
              " " +
              (index + 1) +
              "ShoppingCart" +
              productId +
              selectedOptions[attributeId] +
              ind
            : itemId +
              "ShoppingCart" +
              productId +
              selectedOptions[attributeId] +
              ind
        }
        checked={selectedOptions[attributeId] == value}
        readOnly
      />
      <label
        htmlFor={
          itemId == "Yes" || itemId == "No"
            ? name +
              itemId +
              " " +
              (index + 1) +
              "ShoppingCart" +
              productId +
              selectedOptions[attributeId] +
              ind
            : itemId +
              "ShoppingCart" +
              productId +
              selectedOptions[attributeId] +
              ind
        }
        data-testid={
          selectedOptions[attributeId] == value
            ? `cart-item-attribute-${name
                .toLowerCase()
                .split(" ")
                .join("-")}-${value.split(" ").join("-")}-selected`
            : `cart-item-attribute-${name
                .toLowerCase()
                .split(" ")
                .join("-")}-${value.split(" ").join("-")}`
        }
        style={{
          backgroundColor: type == "swatch" ? value : undefined,
          border: itemId == "White" ? "1px solid black" : undefined,
        }}
        className={type == "text" ? "text shoppingCart" : "color shoppingCart"}
      >
        {type == "text" ? displayValue : undefined}
      </label>
    </>
  );
};

export default ItemSelection;
