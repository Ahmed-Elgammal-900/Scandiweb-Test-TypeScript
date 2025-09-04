import type { JSX } from "react";
import { usePdpContext } from "../../utils/PdpContext";

const ProductPrice = (): JSX.Element => {
  const { symbol, amount } = usePdpContext();
  return (
    <div className="price">
      <h4>price:</h4>
      <h5>
        {symbol}
        {amount}
      </h5>
    </div>
  );
};

export default ProductPrice;
