import React from "react";
import PropTypes from "prop-types";
import "./Ticker.scss";

const Ticker = ({ items = [], className = "" }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <div className={`ticker ${className}`}>
      <div className="ticker__wrapper">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="ticker__item"
            data-text={typeof item === "string" ? item : ""}
          >
            {typeof item === "string" ? item : item}
          </span>
        ))}
      </div>
    </div>
  );
};

Ticker.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.node])
  ).isRequired,
  className: PropTypes.string,
};

export default Ticker;
