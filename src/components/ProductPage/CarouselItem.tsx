import type { JSX } from "react";
import { useGalleryContext } from "../../utils/GalleryContext";

interface ElementProps {
  img: string;
  index: number;
}

const CarouselItem = ({ img, index }: ElementProps): JSX.Element => {
  const { image, instock } = useGalleryContext();
  return (
    <div
      className={index == 0 ? "carousel-item active" : "carousel-item"}
      style={index === image ? { display: "block" } : { display: "none" }}
      key={"image" + index}
    >
      <img src={img} alt="img" />
      <p className={instock == "false" ? "out-of-stock" : undefined}>
        out of stock
      </p>
    </div>
  );
};

export default CarouselItem;
