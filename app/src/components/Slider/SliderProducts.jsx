import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SliderProducts.css";

// import required modules
import { Pagination, Navigation } from "swiper";


const SliderProducts = ({images}) => {
    console.log(images)
  return (
    <>
     <Swiper
        slidesPerView={4}
        spaceBetween={50}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
                {images.map((image,index) => {
         return <SwiperSlide key={index}>
            <img src={image} alt="" />
          </SwiperSlide>;
        })}
      </Swiper>
    </>
  )
}

export default SliderProducts