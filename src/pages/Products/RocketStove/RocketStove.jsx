import React from "react";
import "./RocketStove.scss";
import Slider from "../../../reusableСomponents/ImageSlider/Slider";
import RocketStove_Data from "./RocketStove_Data"

const RocketStove = () => {
  return (
    <section className='woodCalendar-wrapper'>
    <Slider sliderData={RocketStove_Data} contextClass="drying-rack-context" />
  </section>
  )
}

export default RocketStove;
