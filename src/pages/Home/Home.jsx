import React from "react";
import ExpandablePanels from "./ExpandablePanelS/ExpandablePanel";
import HeroSection from "./HeroSection/HeroSection";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <ExpandablePanels />
      <div className="divider-line"></div>
    </div>
  );
};

export default Home;
