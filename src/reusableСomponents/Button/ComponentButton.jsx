import React from "react";
import { NavLink } from "react-router-dom";
import "./ComponentButton.scss";

const ComponentButton = ({ link, label, color, textColor  }) => {
  const buttonStyle = {
    backgroundColor: color || "orange", // по умолчанию цвет будет оранжевый
  };

  const textStyle = {
    color: textColor || 'white', // по умолчанию цвет текста будет белый
  };
  
  return (
    <NavLink to={link} className="reusable__component-button">
      <div className="button orange" style={buttonStyle}>
        <div className="shine"></div>
        <p style={textStyle}>{label}</p>
      </div>
    </NavLink>
  );
};

export default ComponentButton;
