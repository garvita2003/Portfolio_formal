import React from "react";
import "./Education.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import image1 from "../../img/img1.png";
import image2 from "../../img/img2.png";

const Education = () => {
  const clients = [
    {
      img: image1,
      School:"Vellore Institute of Technology, Chennai",
      Course: "B.Tech in Computer Science and Engineering",
      Grade: "Grade : 9.55/10.0",
      Year: "Year  : 2021 - 2025"
    },
    {
      img: image2,
      School:"City Montessor School, Lucknow",
      Course:"Class 12th - PCM with Computer Science",
        Grade: "Grade : 96.75%",
        Year: "Year : 2020 - 2021"
    },
    {
      img: image2,
      School:"City Montessor School, Lucknow",
      Course:"Class 10th - Science Site",
      Grade: "Grade : 91.2%",
      Year: "Year : 2018 - 2019"
    },
  ];

  return (
    <div className="e-wrapper" id="education">
      <div className="e-heading">
        <span>Knowledge </span>
        <span>Education </span>
      <div className="blur e-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur e-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="education">
                <img src={client.img} alt="" />
                <span>{client.School}</span>
                <span>{client.Course}</span>
                <span>{client.Grade}</span>
                <span>{client.Year}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Education;
