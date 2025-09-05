import { memo, useState, type JSX } from "react";
import CarouselIndicators from "./CarouselIndicators";
import CarouselInner from "./CarouserInner";
import { GalleryContext } from "../../utils/GalleryContext";

type ElementProps = {
  gallery: string[];
  instock: string;
};
const Gallery = memo(
  ({ gallery, instock }: ElementProps): JSX.Element => {
    const [image, setImage] = useState<number>(0);
    const handleImageIndicators = (index: number) => {
      setImage(index);
    };

    const goToNextSlide = () => {
      setImage((image) => (image === gallery.length - 1 ? 0 : image + 1));
    };

    const goToPrevSlide = () => {
      setImage((image) => (image === 0 ? gallery.length - 1 : image - 1));
    };

    return (
      <div className="gallery" data-testid="product-gallery">
        <div
          id="carouselExampleIndicators"
          className={instock === "false" ? "out-of-stock" : undefined}
          style={{ display: "flex", columnGap: "50px" }}
        >
          <GalleryContext
            value={{
              image,
              handleImageIndicators,
              goToNextSlide,
              goToPrevSlide,
              instock,
            }}
          >
            <CarouselIndicators gallery={gallery} />
            <CarouselInner gallery={gallery} />
          </GalleryContext>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      JSON.stringify(prevProps.gallery) === JSON.stringify(nextProps.gallery) &&
      prevProps.instock === nextProps.instock
    );
  }
);

export default Gallery;
