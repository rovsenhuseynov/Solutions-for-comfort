import React from "react";
import Slider from "../../../reusableСomponents/ImageSlider/Slider";
import dryingRackData from "./DryingRack_Data";
import Screws_1 from "../../../assets/img/products_img/Screws_1.webp";
import Screws_2 from "../../../assets/img/products_img/Screws_2.webp";
import myVideo from "../../../assets/video/Folding_wall_stand_for_drying.mp4";
import "./DryingRack.scss";

const DryingRack = () => {
  return (
    <section className="dryer-section">

      <div className="title-block">
        <img className="title-block__img" src={Screws_1} alt="Screws" />
        <h2 className="title">
          Paltarları qurutmaq üçün rahat həll.
        </h2>
        <img className="title-block__img" src={Screws_2} alt="Screws" />
      </div>


      <div className="info-block">
        <video className="info-block__video" width="400" controls>
          <source src={myVideo} />
        </video>

        <div className="info-block__text">
          <div className="info-block__subtitled">
            Paltar qurutmaq üçün kompakt bir həll axtarırsınız?
          </div>
          <h6 className="info-text">
            Bu halda qatlanan paltarqurutma stendi sizin üçün ideal seçimdir!
            Quraşdırılması və istifadəsi çox sadədir, saniyələr içində açılır və
            sahənizə qənaət edir. Xüsusilə müasir şəhərlərin çoxmərtəbəli
            binalarındakı balkonlar üçün çox əlverişlidir, çünki hər bir boş yer
            dəyərlidir. Möhkəm konstruksiya hətta ağır əşyaları da asanlıqla
            saxlayır, qatlanmış halda isə stend demək olar ki, görünməz olur.
            Daha çox yaşayış sahəsi – daha az qurutma narahatlığı!
          </h6>
        </div>
      </div>

      <Slider sliderData={dryingRackData} />
    </section>
  );
};

export default DryingRack;
