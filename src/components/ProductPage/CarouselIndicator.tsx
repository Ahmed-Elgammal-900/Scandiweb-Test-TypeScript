import { type JSX } from "react";
import { useGalleryContext } from "../../utils/GalleryContext";

type ElementProps = {
  img: string;
  index: number;
}

const CarouselIndicator = ({ img, index }: ElementProps): JSX.Element => {
  const { image, handleImageIndicators } = useGalleryContext();
  return (
    <div
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={index}
      className={index == image ? "frame active" : "frame"}
      aria-current="true"
      aria-label={`Slide ${index + 1}`}
      key={"carousel" + index}
      onClick={() => handleImageIndicators(index)}
    >
      <img src={img} alt="photo" />
    </div>
  );
};

export default CarouselIndicator;
