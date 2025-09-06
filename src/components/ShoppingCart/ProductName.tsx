import type { JSX } from "react";
import { useInnerCartContext } from "../../utils/InnerCartContext";

const ProductName = (): JSX.Element => {
  const {
    obj: {
      product: {
        name,
        prices: {
          currency: { symbol },
          amount,
        },
      },
    },
  } = useInnerCartContext();
  return (
    <div className="heading">
      <h4>{name}</h4>
      <p>{symbol + amount}</p>
    </div>
  );
};

export default ProductName;
