import { memo, type JSX } from "react";
import CarouselIndicator from "./CarouselIndicator";
import type { GalleryProps } from "../../utils/Types";

const CarouselIndicators = memo(
  ({ gallery }: GalleryProps): JSX.Element => {
    return (
      <div className="carousel-indicators-custom">
        {gallery.map((img: string, index: number) => (
          <CarouselIndicator
            img={img}
            index={index}
            key={`indictor-${index}`}
          />
        ))}
      </div>
    );
  },
  ({ gallery: oldGallery }, { gallery }) => {
    return JSON.stringify(oldGallery) === JSON.stringify(gallery);
  }
);

export default CarouselIndicators;
