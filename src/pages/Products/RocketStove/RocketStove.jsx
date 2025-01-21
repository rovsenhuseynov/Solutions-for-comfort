import React from "react";
import "./RocketStove.scss";
import Slider from "../../../reusableСomponents/ImageSlider/Slider";
import RocketStove_Data from "./RocketStove_Data";
import Screws_1 from "../../../assets/img/products_img/Screws_1.webp";
import Screws_2 from "../../../assets/img/products_img/Screws_2.webp";
import myVideo from "../../../assets/video/rocket-stove.mp4";

const RocketStove = () => {
  return (
    <section className="rocket-stove__wrapper">
      <div className="rocket-stove__title-block">
        <img className="title-block-img" src={Screws_1} alt="Screws" />
        <h2 className="rocket-stove__title">Turbo soba “Raketa”</h2>
        <img className="title-block-img" src={Screws_2} alt="Screws" />
      </div>

      <div className="rocket-stove__info-block ">
        <video className="info-block__video" width="400" controls>
          <source src={myVideo} />
        </video>

        <div className="info-block__text container">
          <div className="info-block__subtitled">
            Təbiətdə yemək hazırlamaq üçün ideal seçim.
          </div>
          <h6 className="info-text">
            Raket sobaları (rocket stove) adını alov şırnağı və raket uçuşu
            zamanı yaranan uğultuya bənzər səslərdən alıblar. Bu sobaların
            quruluşu sadə, lakin unikal olub, onları müxtəlif məqsədlərlə
            istifadə etməyə imkan verir. Reaktiv çəkimə malik unikal
            konstruksiya sayəsində turbo soba hətta yaş odun və xırda budaqları
            tamamilə yandıraraq daha az yanacaq sərf edir. Kompakt ölçüsü ilə
            rahat daşınır, yağış və külək kimi hava şəraitinə davamlıdır və hər
            şəraitdə istifadəyə hazırdır.
          </h6>
        </div>
      </div>

      <Slider sliderData={RocketStove_Data} />
    </section>
  );
};

export default RocketStove;
