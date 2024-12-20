import React from "react";
import "./ExpandablePanel.scss";
import { NavLink } from "react-router-dom";
import ExpandablePanelSlider from "../../../reusableСomponents/ExpandablePanelSlider/ExpandablePanelSlider";

const ExpandablePanel = () => {
  return (
    <section className="expandable-panels">
      <div className="expandable-panels__intro">
        <p className="expandable-panels__tagline">
          Məmulatlar haqqında ətraflı
        </p>

        <h2 className="expandable-panels__title">
          Slayderdə göstərilən məmulatları "Məhsullar" səhifəsində tapa
          bilərsiniz.
        </h2>
      </div>

      <div className="expandable-panels__wrapper">  
        <ExpandablePanelSlider />
      </div>

      <div className="expandable-panels__links">
        <ul className="category-links">
          <li className="category-link-item">
            <NavLink to="/ourTeam">Tops</NavLink>
          </li>

          <li className="category-link-item">
            <NavLink to="/all-collection">All Collection</NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ExpandablePanel;
