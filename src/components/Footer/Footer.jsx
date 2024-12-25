import React from "react";
import "./Footer.scss";
import Logo from "../../reusableСomponents/Logo/Logo";
import NavList from "../../reusableСomponents/NavList/NavList";
import socialWhatsApp from "../../assets/img/svg/whatsapp-svg.svg";
import socialtel from "../../assets/img/svg/phone_blue.svg";
import externalLinks from "../../assets/img/svg/icon_external_link_symbol.svg";

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

          <div className="footer__top-tel-img_block">
            <img
              className="footer__top-tel-img"
              src={socialtel}
              alt="socialWhatsApp"
            />
            <p className="footer__top-tel-num"> 050 6406701</p>
          </div>

          <div className="footer__top-WhatsApp-img_block">
            <img
              className="footer__top-WhatsApp-img"
              src={socialWhatsApp}
              alt="socialWhatsApp"
            />
            <p className="footer__top-WhatsApp-num"> 050 6406701</p>
          </div>


          <div className="footer__top-externalLinks-img_block">
            <img
              className="footer__top-externalLinks-img"
              src={externalLinks}
              alt="socialWhatsApp"
            />
            <p className="footer__top-externalLinks-num">solutions-for-comfort.vercel.app</p>
          </div>



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
