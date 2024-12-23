import React from "react";
import "./Footer.scss";
import Logo from "../../reusableСomponents/Logo/Logo";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="container">
        <div className="footer__top">

          <div className="footer__top-logo">
            <Logo />
          </div>

          <div className="footer__top-nav"></div>

          <div className="footer__top-comtact"></div>
          
        </div>

        <div className="footer__copyright">
          <p className="footer__copyright-text">
            Powered by R.Huseynli © 2025 Bütün hüquqlar qorunur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
