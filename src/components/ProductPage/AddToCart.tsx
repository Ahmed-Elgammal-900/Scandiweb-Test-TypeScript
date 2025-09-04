import { type JSX } from "react";
import { usePdpContext } from "../../utils/PdpContext";

const AddToCart = (): JSX.Element => {
  const { handleSubmittedData, areAllFieldsSelected, instock } =
    usePdpContext();
  return (
    <button
      id="Adding"
      onClick={handleSubmittedData}
      className={
        !areAllFieldsSelected() || instock === "false" ? "disabled" : undefined
      }
      disabled={!areAllFieldsSelected() || instock === "false"}
      data-testid="add-to-cart"
    >
      add to cart
    </button>
  );
};

export default AddToCart;
