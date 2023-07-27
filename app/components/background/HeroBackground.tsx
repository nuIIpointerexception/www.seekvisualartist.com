import React from "react";

const HeroBackground: React.FC = () => {
    return (
        <div>
            <video className="absolute inset-0 h-full w-full object-cover" autoPlay loop muted preload="auto">
                <source src="/hero.webm" type="video/webm" />
            </video>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-bg-dark to-transparent"/>
        </div>
    );
};

export default HeroBackground;
