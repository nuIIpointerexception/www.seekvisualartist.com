import React, { useState, useEffect } from "react";

const Blur = () => {
  const [screenDimensions, setScreenDimensions] = useState({
    width: 1920,
    height: 1080,
  });
  const [scrollOpacity, setScrollOpacity] = useState(1);

  const updateScreenDimensions = () => {
    setScreenDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.clientHeight;
    const bottomThreshold = bodyHeight - windowHeight - 25;

    const opacity = scrollY >= bottomThreshold ? 0 : 1;
    setScrollOpacity(opacity);
  };

  useEffect(() => {
    setScreenDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      updateScreenDimensions();
    };

    const handleScrollEvent = () => {
      handleScroll();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 p-1 backdrop-blur-md"
      style={{
        width: `${screenDimensions.width}px`,
        height: `${screenDimensions.height}px`,
        WebkitMaskImage:
          "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.0) 40%)",
        zIndex: 49,
        pointerEvents: "none",
        opacity: scrollOpacity, // Apply the calculated opacity here
      }}
    />
  );
};

export default Blur;
