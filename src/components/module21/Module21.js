import React,{Component} from 'react';
import './sass/Module21.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import PostImage from "./images/listing-20.png";
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Module21() {
  return (
    <div className="type-21">
      <div className="title">
        <h1 >Keep Up To Date With The Latest News Articles From Lozin.</h1>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="swiperjs">
        
        <SwiperSlide className="slide">
          <img  src={PostImage} alt="post" /> 
          <div className="title_swiper"> Coffeeshops continue </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img  src={PostImage} alt="post" /> 
          <div className="title_swiper"> Coffeeshops continue </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img  src={PostImage} alt="post" /> 
          <div className="title_swiper"> Coffeeshops continue </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img  src={PostImage} alt="post" /> 
          <div className="title_swiper"> Coffeeshops continue </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img  src={PostImage} alt="post" /> 
          <div className="title_swiper"> Coffeeshops continue </div>
        </SwiperSlide>
      
      </Swiper>
    </div>
    
  );
};
