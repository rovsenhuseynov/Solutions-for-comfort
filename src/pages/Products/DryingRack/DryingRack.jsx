import React, { useState } from "react";
import sliderData from "./SliderData";
import "./DryingRack.scss";

const DryingRack = () => {
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
          <label className="prev" onClick={() => handlePrev(activeSlide)}>
            <span>&#x2039;</span>
          </label>
          <label className="next" onClick={() => handleNext(activeSlide)}>
            <span>&#x203a;</span>
          </label>
        </div>
      ))}

      <div id="nav_slide">
        {sliderData.map((_, index) => (
          <label
            key={`dot-${index}`}
            className="dots"
            id={`dot${index + 1}`}
            onClick={() => handleDotClick(index)}
          ></label>
        ))}
      </div>
    </div>
  );
};

export default DryingRack;


