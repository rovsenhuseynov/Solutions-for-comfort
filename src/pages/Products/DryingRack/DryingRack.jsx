import React from "react";
import Slider from "../../../reusableСomponents/ImageSlider/Slider";
import dryingRackData from "./DryingRack_Data";
import Screws_1 from "../../../assets/img/products_img/Screws_1.webp";
import Screws_2 from "../../../assets/img/products_img/Screws_2.webp";
import myVideo from "../../../assets/video/Folding_wall_stand_for_drying.mp4";
import "./DryingRack.scss";

const DryingRack = () => {
  return (
    <section className="dryer-section container">
      <div className="dryer-section__title-block">
        <img className="title-block-img" src={Screws_1} alt="Screws" />
        <h2 className="dryer-section__title">
          Paltarları qurutmaq üçün rahat həll.
        </h2>
        <img className="title-block-img" src={Screws_2} alt="Screws" />
      </div>

      <div className="dryer-section__info-block">
        <video  className="info-block__video" width="400" controls>
            <source src={myVideo} />
        </video>

        <div className="info-block__text">
          <div className="info-block__subtitled">
            Ищете компактное решение для сушки белья?
          </div>
          <h6 className="info-text">
            Складной настенный стенд – идеальный выбор! Простой в установке и
            использовании, он раскладывается за секунды и экономит ваше
            пространство. Особенно актуален для балконов современных городских
            многоэтажных зданий, где важно каждое свободное место. Прочная
            конструкция выдерживает даже тяжёлые вещи, а в сложенном виде стенд
            практически незаметен. Больше места для жизни – меньше хлопот с
            сушкой!
          </h6>
        </div>
      </div>

      <Slider sliderData={dryingRackData} />
    </section>
  );
};

export default DryingRack;
