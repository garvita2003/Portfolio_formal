import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import  builder from "../../img/builder.png";
import Ecommerce from "../../img/ecommerce.png";
import chat from "../../img/chat.png";
import chrome from '../../img/chrome.png';
import code from '../../img/code.png';
import food from '../../img/food.png';
import weather from '../../img/weather.png';
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={chrome} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={chat} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={builder} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={weather} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={food} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={code} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
