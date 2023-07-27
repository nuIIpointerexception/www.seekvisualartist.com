import React from "react";

type GrainProps = {
  baseFrequency?: string;
  numOctaves?: number;
  w?: number | string;
  h?: number | string;
};

const Grain: React.FC<GrainProps> = ({
    baseFrequency = "9",
    numOctaves = 5,
    w = "100%",
    h = "100%",
}) => {
    const viewBox = "0 0 300 300";

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={w}
            height={h}
            viewBox={viewBox}
            preserveAspectRatio="none"
        >
            <filter id="noiseFilter">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency={baseFrequency}
                    numOctaves={numOctaves}
                />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
    );
};

export default Grain;
