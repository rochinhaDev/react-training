import { useState } from "react";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClickPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleClickNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div>
      <button onClick={handleClickPrevious}>Left</button>
      <img src={images[currentImageIndex]} alt="carousel" />
      <button onClick={handleClickNext}>Right</button>
    </div>
  );
};

export default Carousel;
