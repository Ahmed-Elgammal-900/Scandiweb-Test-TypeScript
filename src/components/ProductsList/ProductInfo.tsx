import type { JSX } from "react";

type ElementProps = {
  name: string;
  instock: string;
  symbol: string;
  amount: number;
};

const ProductInfo = ({
  name,
  instock,
  symbol,
  amount,
}: ElementProps): JSX.Element => {
  return (
    <>
      <p className={instock == "false" ? "out-of-stock" : ""}>{name}</p>
      <h4 className={instock == "false" ? "out-of-stock" : ""}>
        {symbol + amount}
      </h4>
    </>
  );
};

export default ProductInfo;
