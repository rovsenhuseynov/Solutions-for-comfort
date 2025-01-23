import React from "react";
import "./WoodCalendar.scss";
import Slider from "../../../reusableСomponents/ImageSlider/Slider";
import WoodCalendar_Data from "./WoodCalendar_Data";
import Screws_1 from "../../../assets/img/products_img/Screws_1.webp";
import Screws_2 from "../../../assets/img/products_img/Screws_2.webp";
import myVideo from "../../../assets/video/woodCalendar.mp4";

const WoodCalendar = () => {
  return (
    <section className="woodCalendar-wrapper">
      <div className="woodCalendar__title-block">
        <img className="title-block-img" src={Screws_1} alt="Screws" />
        <h2 className="woodCalendar__title">Turbo soba “Raketa”</h2>
        <img className="title-block-img" src={Screws_2} alt="Screws" />
      </div>

      <div className="rocket-stove__info-block ">
        <video className="info-block__video" width="400" controls>
          <source src={myVideo} />
        </video>

        <div className="info-block__text ">
          <div className="info-block__subtitled">
            Dekorativ taxta təqvim - Əbədi təqvim.
          </div>

          <h6 className="info-text">
            Əbədi təqvim adi kağız təqvimdən çox fərqli funksiyalara malikdir:
            o, sizi bu günə qaytarır və bugünkü günün hansı gün olduğunu
            öyrənməyə vadar edir, keçmiş günlərə daha çox diqqət yetirmənizi
            təmin edir. Təqvim yaddaşı məşq etdirmək və uşaqları öyrətmək üçün
            istifadə oluna bilər. Çoxsaylı funksiyaları ilə yanaşı,
            interyerinizin bir hissəsinə çevriləcək dekorativ əşyadır və evinizə
            rahatlıq qatacaq. Klassik, müasir və ya minimalizm üslubuna
            uyğunlaşır. Sadə dizaynı və təbii materialları ilə funksional
            aksesuar olmaqla yanaşı, yaxınlarınız üçün gözəl bir hədiyyədir.
            Təqvimi fərdi seçimlərinizə uyğun rəng və elementlərlə tənzimləyə
            bilərsiniz.
          </h6>
        </div>
      </div>

      <Slider
        sliderData={WoodCalendar_Data}
        contextClass="drying-rack-context"
      />
    </section>
  );
};

export default WoodCalendar;
