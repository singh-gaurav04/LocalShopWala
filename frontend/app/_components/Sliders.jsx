
"use client"; // if you are using Next.js 13/14 app router
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/pagination"; 
import { Pagination, Autoplay } from "swiper/modules";

const Sliders = ({ sliderList }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className='mySwiper'
    >
      {sliderList.map((item, index) => {
        return (
          <SwiperSlide key={index} className='rounded-2xl '>
            <img
              src={`http://localhost:1337${item.image[0].formats.large.url}`}
              alt='Slider Image'
              className='w-full h-[200px] md:h-[400px] object-cover rounded-2xl'
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Sliders;
