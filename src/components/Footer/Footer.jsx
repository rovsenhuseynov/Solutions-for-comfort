import React from "react";
import "./Footer.scss";
import Logo from "../../reusableСomponents/Logo/Logo";
import NavList from "../../reusableСomponents/NavList/NavList";

const Footer = () => {
  return (
    <div className="footer__wrapper">
     
        <div className="footer__top">
          <div className="footer__top-logo">
            <Logo />
          </div>

          <div className="footer__top-nav">
            <NavList />
          </div>

          <div className="footer__top-contact">
            <p>tel: 050 6406701</p>
            <p>tel: 050 6406701</p>
          </div>
        </div>

        <div className="footer__copyright">
          <p className="footer__copyright-text">
            Powered by R.Huseynli © 2025 Bütün hüquqlar qorunur.
          </p>
        </div>
    
    </div>
  );
};

export default Footer;
