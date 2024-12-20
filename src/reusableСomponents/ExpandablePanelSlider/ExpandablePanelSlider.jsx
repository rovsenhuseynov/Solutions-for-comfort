import React, { useState, useEffect } from "react";
import panelsData from "../../pages/Home/ExpandablePanelS/panelsData";
import "./ExpandablePanelSlider.scss";

const Panel = ({ title, imageUrl, isActive, onClick }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setTimeout(() => {
        setShowText(true);
      }, 200);
    } else {
      setShowText(false);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isActive]);

  return (
    <div
      className={`panel ${isActive ? "active" : ""}`}
      style={{ backgroundImage: `url('${imageUrl}')` }}
      onClick={onClick}
    >
      <h3
        className="expandable-panels-text"
        style={{
          opacity: showText ? 1 : 0,
          visibility: showText ? "visible" : "hidden",
          transitionDuration: showText ? "0.4s" : "0s",
        }}
      >
        {title}
      </h3>
    </div>
  );
};

const ExpandablePanelSlider = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handlePanelClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="expandable-panels">
      <div className="panels-wrapper">
        {panelsData.map((panel, index) => (
          <Panel
            key={index}
            title={panel.title}
            imageUrl={panel.imageUrl}
            isActive={activeIndex === index}
            onClick={() => handlePanelClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpandablePanelSlider;
