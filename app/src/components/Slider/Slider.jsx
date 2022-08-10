import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import styles
import "./Slider.css";

import { Pagination } from "swiper";

const Slider = ({ images }) => {
   
  return (
    <>
      <Swiper
        className="mySwiper"
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {images.map((image,index) => {
         return <SwiperSlide key={index}>
            <img src={image} alt="" />
          </SwiperSlide>;
        })}
      </Swiper>
    </>
  );
};

export default Slider;
