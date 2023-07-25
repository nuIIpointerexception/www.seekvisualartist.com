import React, { useEffect, useState, useRef } from "react";
import Grain from "../overlay/Grain";
import "./container.css";

type CustomCSSProperties = React.CSSProperties & {
    "--width"?: string | number;
    "--height"?: string | number;
    "--gradient"?: string;
    "--highlight-color"?: string;
    "--accent-color"?: string;
    "--border-radius"?: string | number;
    "--top"?: string | number;
    "--left"?: string | number;
    "--is-hovered"?: number;
    "--cursor-x"?: string;
    "--cursor-y"?: string;
    "--angle"?: number;
};

type ContainerProps = {
    width?: string | number;
    height?: string | number;
    color: string;
    highlightColor?: string;
    accentColor?: string;
    useBlur?: boolean;
    borderRadius?: string | number;
    top?: string | number;
    left?: string | number;
    angle?: number;
    baseFrequency?: string;
    numOctaves?: number;
    children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({
                                                 width,
                                                 height,
                                                 color,
                                                 highlightColor = "rgba(255, 255, 255, 0.25)", // #ffffff just a bit of white
                                                 accentColor = "rgba(198, 115, 255, 1.0)", // #c673ff Amethyst
                                                 useBlur = true,
                                                 borderRadius = 0,
                                                 top = 0,
                                                 left = 0,
                                                 angle,
                                                 // noise
                                                 baseFrequency = "7",
                                                 numOctaves = 3,
                                                 children,
                                             }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (rect) {
                const { left: containerLeft, top: containerTop } = rect;
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
            return `linear-gradient(${angle}deg, rgba(255, 255, 255, 0) 0%, ${color} 100%)`;
        }
        return color;
    };

    const blurClasses = useBlur ? "inline-block px-1 py-1 backdrop-blur-md" : "";

    return (
        <div
            className={`container ${blurClasses}`}
            style={{
                "--angle": `${angle}deg`,
                "--width": typeof width === "number" ? `${width}px` : width,
                "--height": typeof height === "number" ? `${height}px` : height,
                "--gradient": getGradientStyle(),
                "--highlight-color": highlightColor,
                "--accent-color": accentColor,
                "--border-radius": `${borderRadius}px`,
                "--top": `${top}px`,
                "--left": `${left}px`,
                "--is-hovered": isHovered ? 0.5 : 0,
                "--cursor-x": `${cursorPosition.x}px`,
                "--cursor-y": `${cursorPosition.y}px`,
            } as unknown as CustomCSSProperties}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
            ref={containerRef}
        >
            {children}
            <div className="grain">
                <Grain baseFrequency={baseFrequency} numOctaves={numOctaves} w={width} h={height}/>
            </div>
            <div className="accent" />
            <div className="spotlight" />
            <div className="border" />
            <div className="border-highlight" />
        </div>
    );
};

export default Container;
