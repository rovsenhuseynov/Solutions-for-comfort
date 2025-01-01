import React from "react";
import dryingRackData from "./SliderData";
import Slider from "../../../reusableСomponents/ImageSlider/Slider";

const DryingRack = () => {
  return (
    <>
       <Slider sliderData={dryingRackData} title="Modern Curtains" />
    </>
  );
};

export default DryingRack;
