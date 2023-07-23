import React from "react";
import "./background.css";

const HeroBackground: React.FC = () => {
  return (
    <div>
      <video className="hero" autoPlay loop muted playsInline preload="auto">
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-bg" />
    </div>
  );
};

export default HeroBackground;
