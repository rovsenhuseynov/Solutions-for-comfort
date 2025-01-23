import React from "react";
import "./WoodenPress.scss";
import WoodCalendar_Data from "./WoodenPress_Data";
import Slider from "../../../reusableСomponents/ImageSlider/Slider";

const WoodenPress = () => {
  return (
    <section className="woodenPress-wrapper">
      <Slider
        sliderData={WoodCalendar_Data}
        contextClass="woodenPress-context"
      />
    </section>
  );
};

export default WoodenPress;

