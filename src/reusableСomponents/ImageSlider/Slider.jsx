import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Slider.scss";

const Slider = ({ sliderData, title, isClickable, contextClass = "" }) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveSlide((current) =>
      current === sliderData.length ? 1 : current + 1
    );
  };

  const handlePrev = () => {
    setActiveSlide((current) =>
      current === 1 ? sliderData.length : current - 1
    );
  };

  const handleDotClick = (index) => {
    setActiveSlide(index + 1);
  };

  const handleSlideClick = (url) => {
    if (url) navigate(url);
  };

  return (
    <>
      <p className="expandable-slider__title">{title}</p>
      <div className="containers">
        {sliderData.map((slide, index) => (
          <div
            className={`slide_img ${activeSlide === index + 1 ? "active" : ""}`}
            key={slide.id}
            style={{
              zIndex: activeSlide === index + 1 ? 10 : 0,
              opacity: activeSlide === index + 1 ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
            onClick={() => handleSlideClick(slide.url)} // Добавлен обработчик клика
          >
            <img src={slide.src} alt={slide.alt} />

            {activeSlide === index + 1 && (
              <div
                className={`slide_context ${contextClass} ${
                  isClickable ? "clickable" : ""
                }`}
              >
                {slide.context}
              </div>
            )}
          </div>
        ))}

        <button className="prev" onClick={handlePrev}>
          &#x2039;
        </button>
        <button className="next" onClick={handleNext}>
          &#x203a;
        </button>

        <div id="nav_slide">
          {sliderData.map((_, index) => (
            <button
              key={`dot-${index}`}
              className={`dots ${activeSlide === index + 1 ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
