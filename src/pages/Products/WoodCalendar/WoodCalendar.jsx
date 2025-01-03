import React from 'react'
import "./WoodCalendar.scss"
import Slider from '../../../reusableСomponents/ImageSlider/Slider'
import WoodCalendar_Data from "./WoodCalendar_Data"

const WoodCalendar = () => {
  return (
    <>
    {/* <h1 className='dryer-section__title'>Zövqünüzə</h1> */}
    <Slider sliderData={WoodCalendar_Data} contextClass="drying-rack-context" />
  </>
  )
}

export default WoodCalendar