import React, {cloneElement} from "react";
import { IconType } from "react-icons";
import Animated from "./Animated"; // Replace with the correct path to the "Animated" component

type AnimatedToolsProps = {
    delay: number;
    stepSize: number;
    children: React.ReactElement<React.ComponentProps<IconType>>[];
    iconSize: number;
    className?: string;
};

const AnimatedTools: React.FC<AnimatedToolsProps> = ({
    delay,
    stepSize,
    children,
    iconSize,
    className,
}) => {
    return (
        <div className={className}>
            {children.map((child, index) => (
                <Animated key={index} delay={delay + index * stepSize}>
                    {cloneElement(child, { size: iconSize })}
                </Animated>
            ))}
        </div>
    );
};

export default AnimatedTools;
