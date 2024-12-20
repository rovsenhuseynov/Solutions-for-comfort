import React from "react";
import { NavLink } from "react-router-dom";
import logo_img from "../../assets/img/Logo/logo_leaf.svg";
import "./logo_mixin.scss";

function Logo() {
  return (
    <div className="logo">
      <NavLink to="/">
        <div className="header-nav__logo">
          <img src={logo_img} alt="logo" className="header-nav__img" />
          <h5 className="header-nav__context">FunksionalHəllər</h5>
        </div>
      </NavLink>
    </div>
  );
}

export default Logo;
