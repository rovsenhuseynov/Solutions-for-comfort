import React, { useState } from "react";
import "./Slider.scss"; // Переименуйте файл SCSS, если нужно

const Slider = ({ sliderData, title }) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const handleNext = (current) => {
    setActiveSlide(current === sliderData.length ? 1 : current + 1);
  };
  const handlePrev = (current) => {
    setActiveSlide(current === 1 ? sliderData.length : current - 1);
  };
  const handleDotClick = (index) => {
    setActiveSlide(index + 1);
  };

  return (
    <>
      <p className="expandable-slider__title">{title}</p>
      <div className="containers">
        {sliderData.map((slide, index) => (
          <input
            key={`input-${index}`}
            type="radio"
            id={`i${index + 1}`}
            name="images"
            checked={activeSlide === index + 1}
            readOnly
          />
        ))}

        {sliderData.map((slide, index) => (
          <div
            className={`slide_img ${activeSlide === index + 1 ? "active" : ""}`}
            id={slide.id}
            key={slide.id}
          >
            <img src={slide.src} alt={slide.alt} />
            <div className="slide_context">
              {activeSlide === index + 1 && slide.context}
            </div>
            <label
              htmlFor={`i${activeSlide}`}
              className="prev"
              onClick={() => handlePrev(activeSlide)}
            >
              <span>&#x2039;</span>
            </label>
            <label
              htmlFor={`i${activeSlide}`}
              className="next"
              onClick={() => handleNext(activeSlide)}
            >
              <span>&#x203a;</span>
            </label>
          </div>
        ))}

        <div id="nav_slide">
          {sliderData.map((_, index) => (
            <label
              key={`dot-${index}`}
              htmlFor={`i${index + 1}`}
              className="dots"
              id={`dot${index + 1}`}
              onClick={() => handleDotClick(index)}
            ></label>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
