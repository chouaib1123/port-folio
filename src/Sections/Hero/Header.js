import React, { useEffect, useState } from "react";
import Chouaib from "../../assets/images/chouaib.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="Section" id="section0">
      <div className="star1"></div>
      <div className="star2"></div>
      <div className="star3"></div>
      <div className="star4"></div>
      <p className="fs-secondary-heading ff-primary animated-text">
        <span className="text-color">CHOUAIB MOUNSSIF</span>
      </p>
      <p className="fs-primary-heading ff-primary ">
        <span className="glow fw-bold heading-colors ">FULL-STACK </span>
        <span className="fw-bold text-color">DEVELOPPER</span>
      </p>
    </div>
  );
};

export default Header;
