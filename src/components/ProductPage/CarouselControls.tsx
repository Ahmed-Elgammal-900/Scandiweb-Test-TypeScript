import { type JSX } from "react";
import { useGalleryContext } from "../../utils/GalleryContext";

interface ElementProps {
  galleryLength: number;
}

const CarouselControls = ({ galleryLength }: ElementProps): JSX.Element => {
  const { goToNextSlide, goToPrevSlide } = useGalleryContext();
  return (
    <>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
        style={galleryLength == 1 ? { display: "none" } : undefined}
        onClick={goToPrevSlide}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
        style={galleryLength == 1 ? { display: "none" } : undefined}
        onClick={goToNextSlide}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </>
  );
};

export default CarouselControls;
