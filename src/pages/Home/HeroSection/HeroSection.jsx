// import "./HeroSection.scss";
// import React, { useEffect, useRef } from "react";
// import { ParallaxProvider } from "react-scroll-parallax";
// import Ticker from "../../../reusableСomponents/Ticker/Ticker";
// import videoSrc from "../../../assets/video/Folding_wall_stand_for_drying_cloths_and_clothes.mp4";
// import imageSrc from "../../../assets/img/main_banner_bg/banner_bg_14.webp";

// const HeroSection = () => {
//   const containerRef = useRef(null);

//   const customItems = [
//     "Divar üçün qatlanan",
//     <span className="word-highlighting">paltarqurutma</span>,
//     "stendi",
//     "→",
//     "→",
//     "→",
//     "Divar üçün qatlanan",
//     <span className="word-highlighting">paltarqurutma</span>,
//     "stendi",
//     "→",
//     "→",
//     "→",
//   ];

//   useEffect(() => {
//     const handleScroll = (event) => {
//       const delta = event.wheelDelta / 120 || -event.detail / 3;
//       const scrollTop = window.scrollY;
//       const finalScroll = scrollTop - delta * 500;

//       containerRef.current.scrollTo({
//         top: finalScroll,
//         behavior: "smooth",
//       });
//     };

//     window.addEventListener("wheel", handleScroll, { passive: false });

//     return () => {
//       window.removeEventListener("wheel", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="parallax-wrapper">
//       <div className="custom-ticker__wrapper">
//         <Ticker items={customItems} className="custom-ticker" />
//       </div>

//       <ParallaxProvider>
//         <div className="parallax-container" ref={containerRef}>
//           <div className="background__block background__image">
//             <video
//               src={videoSrc}
//               className="parallax-video"
//               autoPlay
//               loop
//               muted
//               playsInline
//             ></video>
//             <img src={imageSrc} alt="Side visual" className="parallax-image" />
//           </div>
//         </div>
//       </ParallaxProvider>
      
//     </div>
//   );
// };

// export default HeroSection;









import "./HeroSection.scss";
import React, { useEffect, useRef, useCallback } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Ticker from "../../../reusableСomponents/Ticker/Ticker";
import videoSrc from "../../../assets/video/Folding_wall_stand_for_drying_cloths_and_clothes.mp4";
import imageSrc from "../../../assets/img/main_banner_bg/banner_bg_14.webp";

const HeroSection = () => {
  const containerRef = useRef(null);

  const customItems = [
    "Divar üçün qatlanan",
    <span key="highlight1" className="word-highlighting">paltarqurutma</span>,
    "stendi",
    "→",
    "→",
    "→",
    "Divar üçün qatlanan",
    <span key="highlight2" className="word-highlighting">paltarqurutma</span>,
    "stendi",
    "→",
    "→",
    "→",
  ];

  const handleScroll = useCallback((event) => {
    if (!containerRef.current) return;

    const delta = event.wheelDelta / 120 || -event.detail / 3;
    const scrollTop = window.scrollY;
    const finalScroll = scrollTop - delta * 500;

    containerRef.current.scrollTo({
      top: finalScroll,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [handleScroll]);

  return (
    <div className="parallax-wrapper">
      <div className="custom-ticker__wrapper">
        <Ticker items={customItems} className="custom-ticker" />
      </div>
      <ParallaxProvider>
        <div className="parallax-container" ref={containerRef}>
          <div className="background__block background__image">
            <video
              src={videoSrc}
              className="parallax-video"
              autoPlay
              loop
              muted
              playsInline
            ></video>
            <img
              src={imageSrc}
              alt="Side visual"
              className="parallax-image"
              loading="lazy"
            />
          </div>
        </div>
      </ParallaxProvider>
    </div>
  );
};

export default HeroSection;