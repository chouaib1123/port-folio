import React, { useState } from "react";

import schoolImage from "../../assets/images/school1.png";
import detailLine from "../../assets/images/DetailLine.svg";
import Switch from "../../Components/Switch/Switch";
import "./AboutMe.css";

function AboutMe() {
  const [isOn, setIsOn] = useState(false);

  const handleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="Section" id="section1">
      <div className="line"></div>
      <Switch isOn={isOn} handleSwitch={handleSwitch} />

      <div className="flex-container">
        <div className="Heading-div aboutme-details">
          <div className="Heading-div-title text-color ff-primary fs-secondary-heading fw-bold">
            <span className="glow">ABOUT ME</span>
          </div>
          <div
            className={`Heading-div-speech text-color ff-primary fs-text fw-regular`}
          >
            Driven by a passion for computer science, with a sharp focus on
            full-stack development and the art of building seamless, impactful
            solutions. Versatile across various domains, constantly embracing
            new challenges, learning opportunities, and growth to stay at the
            forefront of innovation.
          </div>
        </div>

        <div className="details-container">
          <div className={`detail-container-end ${!isOn ? "LowOpacity" : ""}`}>
            <div className="detail">
              <div className="detail-title">
                <h4>High school</h4>
              </div>
              <div className="detail-speech">
                In 2020, I attained my High school diploma in Experimental
                Science.
              </div>
            </div>
          </div>
          <div
            className={`detail-container-start ${!isOn ? "LowOpacity" : ""}`}
          >
            <div className="detail">
              <div className="detail-title">
                <h4>Bachelor</h4>
              </div>
              <div className="detail-speech">
                In the year 2023, I received my Bachelor in Computer Science.
              </div>
            </div>
          </div>
          <div className={`detail-container-end ${!isOn ? "LowOpacity" : ""}`}>
            <div className="detail det">
              <div className="detail-title">
                <h4>Master's Degree</h4>
              </div>
              <div className="detail-speech">
                Currently pursuing a Master's Degree in Big Data and IoT,
                enhancing expertise in cutting-edge technologies.
              </div>
            </div>
          </div>
        </div>

        <div className={`detail-union ${!isOn ? "hidden" : ""}`}>
          <img src={detailLine} alt="Detail Line" />
        </div>

        <div className={`cv-button ${!isOn ? "LowOpacity" : ""}`}>
          <a
            href="https://www.dropbox.com/scl/fi/1i1z9yffctkxajc8fft0a/ChouaibMounssif-E.pdf?rlkey=wbvo2h8etg3l1a4gh4cw1xsol&st=v7aaw3lk&dl=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">
              <span>Resume</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
