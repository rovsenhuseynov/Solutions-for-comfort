import React from "react";
import { NavLink } from "react-router-dom";
import NawDropDownMenu from "../../components/Header/HeaderNav/DropDownMenu/NawDropDownMenu";
import "./NavList.scss"

const NavList = ({ onClose }) => {
  const navLinks = [
    { to: "/", text: "ƏSAS" },
    { to: "/provisions", text: "XIDMƏTLƏR" },
    { to: "/products", text: "MƏHSULLAR" },
    { to: "/faq", text: "FAQ" },
    { to: "/journal", text: "JOURNAL" },
    { to: "/contacts", text: "CONTACTS" },
  ];

  return (
    <div className="nav-list">
      {navLinks.map(({ to, text }) =>
        to === "/services" ? (
          <div key={to} className="nav-list__item">
            <NavLink
              to={to}
              className="nav-list__links services-class"
              onClick={onClose}
            >
              {text}
            </NavLink>
            <NawDropDownMenu onClose={onClose} />
          </div>
        ) : (
          <NavLink
            key={to}
            to={to}
            className="nav-list__item"
            onClick={onClose}
          >
            {text}
          </NavLink>
        )
      )}
    </div>
  );
};

export default NavList;
