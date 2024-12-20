import React from "react";
import "./DropDownMenu.scss";
import { NavLink } from "react-router-dom";

const NawDropDownMenu = ({ onClose }) => {
  return (

    <ul className="dropdown">
      <li className="dropdown__item ">
        <NavLink to="/tulle" className="dropdown__item-link" onClick={onClose}>
          TÜLLƏR
        </NavLink>
      </li>

      <li className="dropdown__item">
        <NavLink
          to="/thick_curtains"
          className="dropdown__item-link"
          onClick={onClose}
        >
          QALIN PƏRDƏLƏR
        </NavLink>
      </li>

      <li className="dropdown__item">
        <NavLink
          to="/subtle_blackout"
          className="dropdown__item-link"
          onClick={onClose}
        >
          GÜNƏŞLİK
        </NavLink>
      </li>

      <li className="dropdown__item">
        <NavLink
          to="/blackout"
          className="dropdown__item-link"
          onClick={onClose}
        >
          GÜNKEÇİRMƏZ
        </NavLink>
      </li>

      <li className="dropdown__item">
        <NavLink
          to="/peculiarities"
          className="dropdown__item-link"
          onClick={onClose}
        >
          BİLGİLƏR
        </NavLink>
      </li>
      
    </ul>
  );
};

export default NawDropDownMenu;
