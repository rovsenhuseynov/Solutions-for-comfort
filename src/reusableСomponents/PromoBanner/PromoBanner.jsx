import React from "react";
import "./PromoBanner.scss";

const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <div className="promo-banner__block">
        <div className="promo-banner__element ">
          İki cüt məhsul aldığınızda 10% endirim qazanın.
        </div>
        <div className="promo-banner__element vertical-bar"></div>
        <div className="promo-banner__element ">
          Abunə olun və ilk sifarişə 10% endirim qazanın.
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
