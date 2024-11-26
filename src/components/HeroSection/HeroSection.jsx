import "./HeroSection.css";
import "../utility.css";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const HeroSection = () => {
  const heroAnimation = useRef(null);

  useEffect(() => {
    const typed = new Typed(heroAnimation.current, {
      strings: [
        "Software Development Engineer",
        "Web Developer",
        "Team Player",
        "Frontend Enthusiast",
        "Backend Problem Solver",
        "Passionate Coder",
        "React Developer",
        "Angular Developer",
        "UI Designer",
        "Tech Optimizer",
        "Agile Practitioner"
      ],
      typeSpeed: 50, 
      backSpeed: 50, 
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="herosection-container">
      <div className="left-section">
        Hi, I am <span className="text-purple">Pritam</span>
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
