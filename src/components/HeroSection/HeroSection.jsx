import "./HeroSection.css";
import "../utility.css";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const HeroSection = () => {
  const heroAnimation = useRef(null);

  useEffect(() => {
    const typed = new Typed(heroAnimation.current, {
      strings: ["Software Developer", "Web Developer", "Team Player"], // Strings to display
      typeSpeed: 50, // Typing speed
      backSpeed: 50, // Backspace speed
      loop: true, // Repeat animation
    });

    // Cleanup for component unmount
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="herosection-container">
      <div className="left-section">
        Hi, My name is <span className="text-purple">Pritam</span>
        <div>and I am a Passionate </div>
        <div id="heroAnimation">
          {" "}
          <span ref={heroAnimation}></span>
        </div>
        <div className="buttons">
          <a
            href="/PritamRauniyar_Resume.pdf"
            download
            className="herosection-btn"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="right-section">
        <img src="/developerpic.png" alt="I am a Developer" />
      </div>
    </div>
  );
};

export default HeroSection;
