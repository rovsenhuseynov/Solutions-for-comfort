// import React from "react";
// import "./PromoBanner.scss";

// const PromoBanner = () => {
//   return (
//     <div className="promo-banner">
//       <div className="promo-banner__block">
//         <div className="promo-banner__element ">
//           İki cüt məhsul aldığınızda 10% endirim qazanın.
//         </div>
//         <div className="promo-banner__element vertical-bar"></div>
//         <div className="promo-banner__element ">
//           Abunə olun və ilk sifarişə 10% endirim qazanın.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PromoBanner;

// import React, { useState, useEffect } from "react";
// import "./PromoBanner.scss";

// const PromoBanner = () => {
//   const [scrollDirection, setScrollDirection] = useState("down");
//   const [prevScrollPos, setPrevScrollPos] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;
//       if (currentScrollPos > prevScrollPos) {
//         setScrollDirection("down");
//       } else {
//         setScrollDirection("up");
//       }
//       setPrevScrollPos(currentScrollPos);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [prevScrollPos]);

//   return (
//     <div className={`promo-banner ${scrollDirection === "down" ? "hidden" : "visible"}`}>
//       <div className="promo-banner__block">
//         <div className="promo-banner__element">
//           İki cüt məhsul aldığınızda 10% endirim qazanın.
//         </div>
//         <div className="promo-banner__element vertical-bar"></div>
//         <div className="promo-banner__element">
//           Abunə olun və ilk sifarişə 10% endirim qazanın.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PromoBanner;

// import React, { useState, useEffect } from "react";
// import "./PromoBanner.scss";

// const PromoBanner = () => {
//   const [scrollDirection, setScrollDirection] = useState("down");
//   const [prevScrollPos, setPrevScrollPos] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;
//       if (currentScrollPos > prevScrollPos) {
//         setScrollDirection("down");
//       } else {
//         setScrollDirection("up");
//       }
//       setPrevScrollPos(currentScrollPos);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [prevScrollPos]);

//   return (
//     <div className={`promo-banner ${scrollDirection === "down" ? "hidden" : "visible"}`}>
//       <div className="promo-banner__block">
//         <div className="promo-banner__element">
//           İki cüt məhsul aldığınızda 10% endirim qazanın.
//         </div>
//         <div className="promo-banner__element vertical-bar"></div>
//         <div className="promo-banner__element">
//           Abunə olun və ilk sifarişə 10% endirim qazanın.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PromoBanner;

// import React, { useState, useEffect } from "react";
// import "./PromoBanner.scss";

// const PromoBanner = () => {
//   const [scrollDirection, setScrollDirection] = useState("down");
//   const [prevScrollPos, setPrevScrollPos] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;
//       if (currentScrollPos > prevScrollPos) {
//         setScrollDirection("down");
//       } else {
//         setScrollDirection("up");
//       }
//       setPrevScrollPos(currentScrollPos);
//       console.log("scrollDirection:", scrollDirection); // Логируем направление прокрутки
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [prevScrollPos, scrollDirection]);

//   return (
//     <div className={`promo-banner ${scrollDirection === "down" ? "hidden" : "visible"}`}>
//       <div className="promo-banner__block">
//         <div className="promo-banner__element">
//           İki cüt məhsul aldığınızda 10% endirim qazanın.
//         </div>
//         <div className="promo-banner__element vertical-bar"></div>
//         <div className="promo-banner__element">
//           Abunə olun və ilk sifarişə 10% endirim qazanın.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PromoBanner;

// import React, { useState, useEffect } from "react";
// import "./PromoBanner.scss";

// const PromoBanner = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [prevScrollPos, setPrevScrollPos] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.scrollY;

//       // Скрываем баннер при прокрутке вниз, показываем при прокрутке вверх
//       if (currentScrollPos > prevScrollPos) {
//         setIsVisible(false); // Скрыть
//       } else {
//         setIsVisible(true); // Показать
//       }
//       setPrevScrollPos(currentScrollPos);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [prevScrollPos]);

//   return (
//     <div className={`promo-banner ${isVisible ? "visible" : "hidden"}`}>
//       <div className="promo-banner__block">
// <div className="promo-banner__element">
//   İki cüt məhsul aldığınızda 10% endirim qazanın.
// </div>

// <div className="promo-banner__element vertical-bar"></div>
// <div className="promo-banner__element">
//   Abunə olun və ilk sifarişə 10% endirim qazanın.
// </div>
//       </div>
//     </div>
//   );
// };

// export default PromoBanner;

// import React, { useState, useEffect } from "react";
// import "./PromoBanner.scss";

// const PromoBanner = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsVisible(false); // Скрываем при прокрутке вниз
//       } else {
//         setIsVisible(true); // Показываем при прокрутке вверх
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className={`promo-banner ${isVisible ? "visible" : "hidden"}`}>
//       <div className="promo-banner__block">
//         <div className="promo-banner__element">
//           İki cüt məhsul aldığınızda 10% endirim qazanın.
//         </div>
//         <div className="promo-banner__element vertical-bar"></div>
//         <div className="promo-banner__element">
//           Abunə olun və ilk sifarişə 10% endirim qazanın.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PromoBanner;

import React, { useState, useEffect } from "react";
import "./PromoBanner.scss";

const PromoBanner = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Обновляем scrollY при каждом скролле
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="promo-banner"
      style={{
        transform: `translateY(-${scrollY / 0.4}px)`, // Плавное движение
      }}
    >
      <div className="promo-banner__block">
        <div className="promo-banner__element">
          İki cüt məhsul aldığınızda 10% endirim qazanın.
        </div>

        <div className="promo-banner__element vertical-bar"></div>
        <div className="promo-banner__element">
          Abunə olun və ilk sifarişə 10% endirim qazanın.
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
