import type { JSX } from "react";
import GalleryPlaceHolder from "./GalleryPlaceHolder";
import InfoPlaceHolder from "./InfoPlaceHolder";

const PDPPlaceholder = (): JSX.Element => {
  return (
    <div className="container product-page">
      <div className="product-info d-flex justify-content-between">
        <GalleryPlaceHolder />
        <InfoPlaceHolder />
      </div>
    </div>
  );
};

export default PDPPlaceholder;
