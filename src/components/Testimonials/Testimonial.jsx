import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.png";
import profilePic2 from "../../img/profile2.png";
import profilePic3 from "../../img/profile3.png";
import profilePic4 from "../../img/profile4.png";
import profilePic5 from "../../img/profile5.png";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Worked as an Intern for Full Stack Web Development and build an Online Book Store using Java, Frontend, Backend and Database Technologies. Cut down paper work of about 75%. ",
    },
    {
      img: profilePic2,
      review:
        "Certified by Oracle in Oracle Foundation Associate.",
    },
    {
      img: profilePic3,
      review:
        "Certified by Coding Ninja's in CodeKaze Hackathon and secured 25115 AIR.",
    },
    {
      img: profilePic4,
      review:
        "Certified by HackerRank in Java and Python.",
    },
    {
      img: profilePic5,
      review:
        "Certified by Google and Microsoft in HTML and CSS.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Internship / Certificate </span>
        <span>Exceptional Work </span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

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
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
