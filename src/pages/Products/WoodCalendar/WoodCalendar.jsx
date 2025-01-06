import React from "react";
import "./WoodCalendar.scss";
import Slider from "../../../reusableСomponents/ImageSlider/Slider";
import WoodCalendar_Data from "./WoodCalendar_Data";

const WoodCalendar = () => {
  return (
    <section className="woodCalendar-wrapper">
      <Slider
        sliderData={WoodCalendar_Data}
        contextClass="drying-rack-context"
      />
    </section>
  );
};

export default WoodCalendar;
