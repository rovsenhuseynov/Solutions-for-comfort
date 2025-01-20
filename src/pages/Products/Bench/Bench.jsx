import React from "react";
import "./Bench.scss";
import Slider from "../../../reusableСomponents/ImageSlider/Slider";
import BenchData from "./Bench";

const Bench = () => {
  return (
    <section className=" container">
      <Slider sliderData={BenchData} contextClass="bench-section" />
    </section>
  );
};

export default Bench;
