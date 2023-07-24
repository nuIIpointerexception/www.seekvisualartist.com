import React from "react";
import "./background.css";

const HeroBackground: React.FC = () => {
  return (
    <div>
      <video className="hero" autoPlay loop muted preload="auto">
        <source src="/hero.webm" type="video/webm" />
      </video>
      <div className="hero-bg" />
    </div>
  );
};

export default HeroBackground;
