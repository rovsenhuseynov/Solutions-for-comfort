import React from 'react'
import Slider from '../../../reusableСomponents/ImageSlider/Slider'
import chairData from './Сhair'
import "./Сhair.scss"

const GazeboChair = () => {
  return (
    <section className="chair-section__wrapper ">
    <Slider sliderData={chairData} contextClass="drying-rack-context" />
  </section>
  )
}

export default GazeboChair