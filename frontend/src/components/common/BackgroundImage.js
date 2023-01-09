import React from "react";

const BackgroundImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={"absolute inset-0 z-0 h-full w-full object-cover"}
    />
  );
};

export default BackgroundImage;
