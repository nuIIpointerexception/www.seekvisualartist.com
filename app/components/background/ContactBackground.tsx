import React from "react";

const ContactBackground: React.FC = () => {
    return (
        <div className="absolute inset-0">
            <video className="h-full w-full object-cover" autoPlay={true} loop playsInline={true} muted preload="auto">
                <source src="/contact.webm" type="video/webm" />
            </video>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-bg-dark to-transparent"/>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-bg-dark to-transparent"/>
        </div>
    );
};

export default ContactBackground;
