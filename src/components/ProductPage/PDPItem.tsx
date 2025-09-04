import type { JSX } from "react";
import { usePdpContext } from "../../utils/PdpContext";
import type { AttributeInfo, Item } from "../../utils/Types";

interface ElementProps {
  item: Item;
  index: number;
  attribute: AttributeInfo;
};

const PDPItem = ({
  item: { value, id: itemId, displayValue },
  index,
  attribute: { name, type, id: attributeId },
}: ElementProps): JSX.Element => {
  const { handleChange, selectedOptions, instock } = usePdpContext();
  return (
    <>
      <input
        type="radio"
        name={name + "ProductPage"}
        value={value}
        id={
          itemId == "Yes" || itemId == "No"
            ? name + itemId + " " + (index + 1) + "ProductPage"
            : itemId + "ProductPage"
        }
        onChange={(event) => handleChange(event, attributeId)}
        checked={selectedOptions[attributeId] == value}
        disabled={instock === "false"}
      />
      <label
        className={type == "text" ? "text" : "color"}
        style={{
          backgroundColor: type == "swatch" ? value : undefined,
          border: itemId == "White" ? "1px solid black" : undefined,
          opacity: instock === "false" ? "50%" : "100%",
          cursor: instock === "false" ? "not-allowed" : "pointer",
        }}
        data-testid={
          selectedOptions[attributeId] == value
            ? `product-attribute-${name
                .toLowerCase()
                .split(" ")
                .join("-")}-${value.split(" ").join("-")}-selected`
            : `product-attribute-${name
                .toLowerCase()
                .split(" ")
                .join("-")}-${value.split(" ").join("-")}`
        }
        htmlFor={
          itemId == "Yes" || itemId == "No"
            ? name + itemId + " " + (index + 1) + "ProductPage"
            : itemId + "ProductPage"
        }
      >
        {type == "text" ? displayValue : null}
      </label>
    </>
  );
};

export default PDPItem;
