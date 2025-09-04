import type { JSX } from "react";

const GalleryPlaceHolder = (): JSX.Element => {
  return (
    <div
      className="gallery placeholder-wave"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="carousel placeholder"></div>
      <div
        className="image placeholder"
        style={{ width: "500px", height: "500px" }}
      ></div>
    </div>
  );
};

export default GalleryPlaceHolder;
