import React from "react";

const Color: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: 47,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(0deg, rgba(255, 255, 255, 1.0) 0%, rgba(0, 0, 0, 0.0) 0%)",
          opacity: 0.1,
        }}
      ></div>
    </div>
  );
};

export default Color;
