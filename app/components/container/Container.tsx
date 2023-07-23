import React, { useEffect, useState, useRef } from "react";
import Grain from "../overlay/Grain";

type HoverRectangleProps = {
  width?: string | number;
  height?: string | number;
  color: string;
  useBlur?: boolean;
  borderRadius?: string | number;
  top?: string | number;
  left?: string | number;
  angle?: number;
  // grain
  baseFrequency?: string;
  numOctaves?: number;
  children: React.ReactNode; // Add children prop to receive nested content
};

const HoverRectangle: React.FC<HoverRectangleProps> = ({
  width,
  height,
  color,
  useBlur = true,
  borderRadius = 0,
  top = 0,
  left = 0,
  angle,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const containerLeft = rect.left;
        const containerTop = rect.top;
        const x = event.clientX - containerLeft;
        const y = event.clientY - containerTop;

        setCursorPosition({ x, y });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const getGradientStyle = () => {
    if (typeof angle === "number" && !isNaN(angle)) {
      const gradientColor = `linear-gradient(${angle}deg, rgba(255, 255, 255, 0) 0%, ${color} 100%)`;
      return `${gradientColor}`;
    }
    return color;
  };

  const blurClasses = useBlur ? "inline-block px-1 py-1 backdrop-blur-md" : "";

  return (
    <div
      className={`${blurClasses}`}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        background: getGradientStyle(),
        borderRadius:
          typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius,
        position: "absolute",
        top: typeof top === "number" ? `${top}px` : top,
        left: typeof left === "number" ? `${left}px` : left,
        transition: "filter 0.3s ease-out, outline 0.3s ease-out",
        filter: isHovered ? "brightness(100%)" : "brightness(100%)",
        overflow: "hidden",
        WebkitMask: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3))`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      ref={containerRef}
    >
      {children}
      <div
        style={{
          width: typeof width === "number" ? `${width}px` : width,
          height: typeof height === "number" ? `${height}px` : height,
          position: "absolute",
          top: "0px",
          left: "0px",
          pointerEvents: "none",
          opacity: 0.13, // Changed from "0.2" to 0.2
        }}
      >
        <Grain baseFrequency="7" numOctaves={3} w={width} h={height} />
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          inset: "0px",
          borderRadius:
            typeof borderRadius === "number"
              ? `${borderRadius}px`
              : borderRadius,
          background: `linear-gradient(rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.0)) padding-box,
                    linear-gradient(${angle}deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4)) border-box`,
          WebkitMask: `linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: "destination-out",
          maskComposite: "exclude",
          border: "1px solid transparent",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "-1px",
          left: "-1px",
          borderRadius:
            typeof borderRadius === "number"
              ? `${borderRadius}px`
              : borderRadius,
          background: `radial-gradient(800px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(81, 88, 180, 0.4),transparent 40%)`,
          opacity: isHovered ? 0.5 : 0,
          transition: "opacity 0.3s ease-out",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default HoverRectangle;
