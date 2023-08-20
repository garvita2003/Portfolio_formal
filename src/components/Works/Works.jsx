import React, { useContext } from "react";
import "./Works.css";
import Html from "../../img/html.png";
import Css from "../../img/css.png";
import Js from '../../img/js.png';
import Boot from "../../img/boot.png";
import Rlogo from '../../img/rjs.png';
import nLogo from '../../img/node.png';
import elogo from '../../img/express.png';
import fig from '../../img/figma.png';
import block from '../../img/block.png';
import ai from '../../img/ai.png';
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Skills
          </span>
          <span>
            Web Development
            <br />
            UI/UX Design
            <br />
            AI Enthusiastic
            <br />
            BlockChain Development
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Html} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Css} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Js} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Boot} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={fig} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Rlogo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={nLogo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={elogo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={ai} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={block} alt="" />
          </div>
          
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
