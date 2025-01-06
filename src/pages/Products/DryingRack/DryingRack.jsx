import React from 'react'
import Slider from '../../../reusableСomponents/ImageSlider/Slider'
import dryingRackData from "./DryingRack_Data"
import "./DryingRack.scss"


const DryingRack = () => {
  return (
    <section className='dryer-section'>
      <Slider sliderData={dryingRackData} />
    </section>
  )
}

export default DryingRack