import React from "react";
import "./background.css";

const ContactBackground: React.FC = () => {
  return (
    <div>
      <video className="contact" autoPlay loop muted playsInline>
        <source src="/contact.mp4" type="video/mp4" />
        <source src="/contact.png" type="video/mp4" />
      </video>
      <div className="contact-bg" />
    </div>
  );
};

export default ContactBackground;
