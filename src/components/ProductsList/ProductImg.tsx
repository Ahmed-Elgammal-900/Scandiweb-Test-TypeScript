import type { JSX } from "react";

type ElementProps = {
  firstImage: string;
  instock: string;
};

const ProductImg = ({ firstImage, instock }: ElementProps): JSX.Element => {
  return (
    <img
      src={firstImage}
      alt="image"
      className={instock == "false" ? "img-fluid out-of-stock" : "img-fluid"}
      width={"100px"}
    />
  );
};

export default ProductImg;
