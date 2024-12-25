import React from "react";
import "./Products.scss";
import Screws_1 from "../../assets/img/screws/Screws_1.webp"
import Screws_2 from "../../assets/img/screws/Screws_2.webp"
import Screws_3 from "../../assets/img/screws/Screws_3.webp"
import Screws_4 from "../../assets/img/screws/Screws_4.webp"

const Products = () => {
  return (
    <section className="products">
      <div className="product__title">
        <div className="product__title-top">
          <img className="product__title-img1" src={Screws_1} alt="Screws" />
          <img className="product__title-img1" src={Screws_2} alt="Screws" />
        </div>
        <div className="product__title-median">
          <h1 className="product__title-imace_text">Məhsullar kataloqu</h1>
        </div>
        <div className="product__title-bottom">
          <img className="product__title-img2" src={Screws_3} alt="Screws" />
          <img className="product__title-img2" src={Screws_4} alt="Screws" />
        </div>
      </div>
    </section>
    

  );
};

export default Products;
