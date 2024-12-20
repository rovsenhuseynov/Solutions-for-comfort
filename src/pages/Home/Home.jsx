import React from "react";
import ExpandablePanels from "./ExpandablePanelS/ExpandablePanel";
import HeroSection from "./HeroSection/HeroSection";

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection/>
      <ExpandablePanels />
    </div>
  );
};

export default Home;
