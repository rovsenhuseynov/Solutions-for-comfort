import React from "react";
import "./ExpandablePanel.scss";
import { NavLink } from "react-router-dom";
import ExpandablePanelSlider from "../../../reusableСomponents/ExpandablePanelSlider/ExpandablePanelSlider";

const ExpandablePanel = () => {
  return (
    <section className="expandablePanel">
      <div className="expandablePanel__intro">
        <p className="expandablePanel__tagline">
          Məmulatlar haqqında ətraflı
        </p>

        <h2 className="expandablePanel__title">
        Slayderdə göstərilən məmulatları və digər məhsulları "Məhsullar" səhifəsində tapa bilərsiniz
        </h2>
      </div>

      <div className="expandablePanel__wrapper">  
        <ExpandablePanelSlider />
      </div>

      <div className="expandablePanel__links">
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
