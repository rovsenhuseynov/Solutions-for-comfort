import React from 'react'
import Slider from '../../../reusableСomponents/ImageSlider/Slider'
import dryingRackData from "./DryingRack_Data"
import "./DryingRack.scss"


const DryingRack = () => {
  return (
    <section className='dryer-section'>
      <h1 className='dryer-section__title'>Zövqünüzə, istifadə məkanının xüsusiyyətlərinə, rəng seçiminizə və keyfiyyət standartlarına əsaslanaraq seçim edin.</h1>
      <Slider sliderData={dryingRackData} contextClass="drying-rack-context" />
    </section>
  )
}

export default DryingRack