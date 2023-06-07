import React, { useState } from "react";
import "./carousel.css";

function Carousel({images}) {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    function handlePrevClick() {
      setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    }
  
    function handleNextClick() {
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    }
  
  
    return (
      <div className="carousel">
        <div className="carousel-inner">
          {images.map((imageUrl, index) => (
            <div
              className={`carousel-item ${
                index === currentIndex ? "active" : ""
              } ${index === currentIndex - 1 ? "prev" : ""} ${
                index === currentIndex + 1 ? "next" : ""
              }`}
              key={imageUrl}
            >
              <img src={imageUrl} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        <button className="carousel-prev" onClick={handlePrevClick}>
            <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
            </svg>
        </button>
        <button className="carousel-next" onClick={handleNextClick}>
        <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
        </svg>

        </button>
      </div>
    );
  }
  

export default Carousel;
