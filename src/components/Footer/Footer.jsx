import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>garvitakesharwani22@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/garvita-kesarwani-89a00a246/" target="_blank">
          <LinkedIn color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/garvita2003" target="_blank">
          <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
