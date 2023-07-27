import React from "react";

const ContactBackground: React.FC = () => {
    return (
        <div>
            <video className="absolute inset-0 h-full w-full object-cover" autoPlay loop muted playsInline preload="auto">
                <source src="/contact.webm" type="video/webm" />
            </video>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-bg-dark to-transparent"/>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-bg-dark to-transparent"/>
        </div>
    );
};

export default ContactBackground;
