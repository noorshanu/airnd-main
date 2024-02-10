import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function RoadMob() {
  return (
    <>
      <Swiper className="mySwiper relative z-50">
        <SwiperSlide><img src="images/box-1.png" alt="" className=" h-auto" /></SwiperSlide>
        <SwiperSlide><img src="images/box-1.png" alt="" className=" h-auto" /></SwiperSlide>
        <SwiperSlide><img src="images/box-1.png" alt="" className=" h-auto" /></SwiperSlide>
        <SwiperSlide><img src="images/box-1.png" alt="" className=" h-auto" /></SwiperSlide>
      
      </Swiper>
    </>
  )
}

export default RoadMob