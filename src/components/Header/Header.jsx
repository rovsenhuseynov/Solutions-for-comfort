import React from "react";
import "./Header.scss";
import PromoBanner from "../../reusableСomponents/PromoBanner/PromoBanner";
import HeaderNav from "./HeaderNav/HeaderNav";
import Card from "./card/Card";
import Ticker from "../../reusableСomponents/Ticker/Ticker";

const Header = () => {
  const customItems = [
    "Sifariş ",
    "əsasında ",
    "praktik ",
    "məhsullar ",
    "yaradırıq",
    "–",
    "ideyadan",
    "quraşdırmaya",
    "qədər.",
    "Əlaqə nömrəmiz",
    ":",
    "050-640 67 01",
    " / ",
    "  ",
  ];

  return (
    <div className="header">
      <PromoBanner />
      <HeaderNav />
      <div className="card-wrapper">
        <Card />
      </div>
      <Ticker items={customItems} className="custom-ticker" />
    </div>
  );
};

export default Header;
