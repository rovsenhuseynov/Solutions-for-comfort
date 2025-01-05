// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Slider.scss";

// const Slider = ({ sliderData, title }) => {
//   const [activeSlide, setActiveSlide] = useState(1);
//   const navigate = useNavigate();

//   const handleNext = (current) => {
//     setActiveSlide(current === sliderData.length ? 1 : current + 1);
//   };

//   const handlePrev = (current) => {
//     setActiveSlide(current === 1 ? sliderData.length : current - 1);
//   };

//   const handleDotClick = (index) => {
//     setActiveSlide(index + 1);
//   };

//   const handleContextClick = (url) => {
//     if (url) {
//       navigate(url); // Переход на указанный маршрут
//     }
//   };

//   return (
//     <>
//       <p className="expandable-slider__title">{title}</p>
//       <div className="containers">
//         {/* Радиокнопки */}
//         {sliderData.map((slide, index) => (
//           <input
//             key={`input-${index}`}
//             type="radio"
//             id={`i${index + 1}`}
//             name="images"
//             checked={activeSlide === index + 1}
//             readOnly
//             style={{ zIndex: -1 }} // Убедитесь, что радиокнопки не перекрывают слайды
//           />
//         ))}

//         {/* Слайды */}
//         {sliderData.map((slide, index) => (
//           <div
//             className={`slide_img ${activeSlide === index + 1 ? "active" : ""}`}
//             id={slide.id}
//             key={slide.id}
//             style={{
//               zIndex: activeSlide === index + 1 ? 10 : 0, // Установить правильный zIndex для активного слайда
//             }}
//           >
//             <img src={slide.src} alt={slide.alt} />

//             <div
//               className="slide_context"
//               onClick={() => handleContextClick(slide.url)}
//             >
//               {activeSlide === index + 1 && slide.context}
//             </div>

//             <label
//               htmlFor={`i${activeSlide}`}
//               className="prev"
//               onClick={() => handlePrev(activeSlide)}
//               style={{ zIndex: 11 }} // Обеспечиваем, что элементы управления всегда поверх
//             >
//               <span>&#x2039;</span>
//             </label>
//             <label
//               htmlFor={`i${activeSlide}`}
//               className="next"
//               onClick={() => handleNext(activeSlide)}
//               style={{ zIndex: 11 }} // Обеспечиваем, что элементы управления всегда поверх
//             >
//               <span>&#x203a;</span>
//             </label>
//           </div>
//         ))}

//         {/* Навигационные точки */}
//         <div id="nav_slide">
//           {sliderData.map((_, index) => (
//             <label
//               key={`dot-${index}`}
//               htmlFor={`i${index + 1}`}
//               className="dots"
//               id={`dot${index + 1}`}
//               onClick={() => handleDotClick(index)}
//               style={{
//                 backgroundColor: activeSlide === index + 1 ? "#fff" : "#000", // Белый для активной точки
//                 zIndex: 12, // Устанавливаем выше, чтобы они не перекрывались другими элементами
//               }}
//             ></label>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Slider;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Slider.scss";

// const Slider = ({ sliderData, title, isClickable }) => {
//   const [activeSlide, setActiveSlide] = useState(1);
//   const navigate = useNavigate();

//   const handleNext = (current) => {
//     setActiveSlide(current === sliderData.length ? 1 : current + 1);
//   };

//   const handlePrev = (current) => {
//     setActiveSlide(current === 1 ? sliderData.length : current - 1);
//   };

//   const handleDotClick = (index) => {
//     setActiveSlide(index + 1);
//   };

//   const handleContextClick = (url) => {
//     if (url) {
//       navigate(url); // Переход на указанный маршрут
//     }
//   };

//   return (
//     <>
//       <p className="expandable-slider__title">{title}</p>
//       <div className="containers">
//         {/* Радиокнопки */}
//         {sliderData.map((slide, index) => (
//           <input
//             key={`input-${index}`}
//             type="radio"
//             id={`i${index + 1}`}
//             name="images"
//             checked={activeSlide === index + 1}
//             readOnly
//             style={{ zIndex: -1 }} // Убедитесь, что радиокнопки не перекрывают слайды
//           />
//         ))}

//         {/* Слайды */}
//         {sliderData.map((slide, index) => (
//           <div
//             className={`slide_img ${activeSlide === index + 1 ? "active" : ""}`}
//             id={slide.id}
//             key={slide.id}
//             style={{
//               zIndex: activeSlide === index + 1 ? 10 : 0, //
//             }}
//           >
//             <img src={slide.src} alt={slide.alt} />

//             <div
//               className={`slide_context ${isClickable ? "clickable" : ""}`} // Применяем класс только если isClickable=true
//               onClick={() => handleContextClick(slide.url)}
//             >
//               {activeSlide === index + 1 && slide.context}
//             </div>

//             <label
//               htmlFor={`i${activeSlide}`}
//               className="prev"
//               onClick={() => handlePrev(activeSlide)}
//               style={{ zIndex: 11 }}
//             >
//               <span>&#x2039;</span>
//             </label>
//             <label
//               htmlFor={`i${activeSlide}`}
//               className="next"
//               onClick={() => handleNext(activeSlide)}
//               style={{ zIndex: 11 }}
//             >
//               <span>&#x203a;</span>
//             </label>
//           </div>
//         ))}

//         {/* Навигационные точки */}
//         <div id="nav_slide">
//           {sliderData.map((_, index) => (
//             <label
//               key={`dot-${index}`}
//               htmlFor={`i${index + 1}`}
//               className="dots"
//               id={`dot${index + 1}`}
//               onClick={() => handleDotClick(index)}
//               style={{
//                 backgroundColor: activeSlide === index + 1 ? "#fff" : "#000",
//                 zIndex: 12,
//               }}
//             ></label>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Slider;





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Slider.scss";

// const Slider = ({ sliderData, title, isClickable, contextClass = "" }) => {
//   const [activeSlide, setActiveSlide] = useState(1);
//   const navigate = useNavigate();



//   const handleNext = (current) => {
//     setActiveSlide(current === sliderData.length ? 1 : current + 1);
//   };

//   const handlePrev = (current) => {
//     setActiveSlide(current === 1 ? sliderData.length : current - 1);
//   };

  
//   const handleDotClick = (index) => {
//     setActiveSlide(index + 1);
//   };

//   const handleContextClick = (url) => {
//     if (url) {
//       navigate(url);
//     }
//   };

//   return (
//     <>
//       <p className="expandable-slider__title">{title}</p>
//       <div className="containers">
//         {sliderData.map((slide, index) => (
//           <input
//             key={`input-${index}`}
//             type="radio"
//             id={`i${index + 1}`}
//             name="images"
//             checked={activeSlide === index + 1}
//             readOnly
//             style={{ zIndex: -1 }}
//           />
//         ))}

//         {sliderData.map((slide, index) => (
//           <div
//             className={`slide_img ${activeSlide === index + 1 ? "active" : ""}`}
//             id={slide.id}
//             key={slide.id}
//             style={{
//               zIndex: activeSlide === index + 1 ? 10 : 0,
//             }}
//           >
//             <img src={slide.src} alt={slide.alt} />

//             <div
//               className={`slide_context ${contextClass} ${
//                 isClickable ? "clickable" : ""
//               }`}
//               onClick={() => handleContextClick(slide.url)}
//             >
//               {activeSlide === index + 1 && slide.context}
//             </div>

//             <label
//               htmlFor={`i${activeSlide}`}
//               className="prev"
//               onClick={() => handlePrev(activeSlide)}
//               style={{ zIndex: 11 }}
//             >
//               <span>&#x2039;</span>
//             </label>
//             <label
//               htmlFor={`i${activeSlide}`}
//               className="next"
//               onClick={() => handleNext(activeSlide)}
//               style={{ zIndex: 11 }}
//             >
//               <span>&#x203a;</span>
//             </label>
//           </div>
//         ))}

//         <div id="nav_slide">
//           {sliderData.map((_, index) => (
//             <label
//               key={`dot-${index}`}
//               htmlFor={`i${index + 1}`}
//               className="dots"
//               id={`dot${index + 1}`}
//               onClick={() => handleDotClick(index)}
//               style={{
//                 backgroundColor: activeSlide === index + 1 ? "#fff" : "#000",
//                 zIndex: 12,
//               }}
//             ></label>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Slider;






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

  const handleContextClick = (url) => {
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
          >
            <img src={slide.src} alt={slide.alt} />

            {activeSlide === index + 1 && (
              <div
                className={`slide_context ${contextClass} ${
                  isClickable ? "clickable" : ""
                }`}
                onClick={() => handleContextClick(slide.url)}
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
              style={{
                backgroundColor: activeSlide === index + 1 ? "#fff" : "#000",
              }}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;


