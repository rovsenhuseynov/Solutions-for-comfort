import React from 'react'
import Slider from '../../../reusableСomponents/ImageSlider/Slider'
import dryingRackData from "./DryingRack_Data"


const DryingRack = () => {
  return (
    <section className='dryer-section'>
      <h1 className='dryer-section__title'>dfghjdfghkjdhgjdhgjdhj</h1>
      <Slider sliderData={dryingRackData} />
    </section>
  )
}

export default DryingRack