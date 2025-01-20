import React from "react";
import "./Bench.scss";
import Slider from "../../../reusableСomponents/ImageSlider/Slider";
import BenchData from "./Bench";

const Bench = () => {
  return (
    <section className="bench-section container">
      <Slider sliderData={BenchData} contextClass="drying-rack-context" />
    </section>
  );
};

export default Bench;
