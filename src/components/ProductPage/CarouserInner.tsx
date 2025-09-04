import CarouselItem from "./CarouselItem";
import CarouselControls from "./CarouselControls";
import { memo, type JSX } from "react";
import type { GalleryProps } from "../../utils/Types";

const CarouselInner = memo(
  ({ gallery }: GalleryProps): JSX.Element => {
    return (
      <div className="carousel-inner">
        {gallery.map((img, index) => (
          <CarouselItem img={img} index={index} key={`img-${index}`} />
        ))}
        <CarouselControls galleryLength={gallery.length} />
      </div>
    );
  },
  ({ gallery: oldGallery }, { gallery }) => {
    return JSON.stringify(oldGallery) === JSON.stringify(gallery);
  }
);

export default CarouselInner;
