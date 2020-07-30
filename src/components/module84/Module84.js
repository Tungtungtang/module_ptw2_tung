import React,{Component} from 'react';
import './sass/Module84.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import PostImage from "./images/brand-dark-3.png";
import PostImage1 from "./images/brand-dark-4.png";
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Module84() {
  return (
    <div className="type-84">
        <div className="container">
        <div className="title">
        <p className="top-title">B R A N D S</p>
        <h1 >Our Customers Like Us.</h1>
        <p>Donec id elit non mi porta gravida at eget metus lorem ipsum dolor.</p>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="swiperjs">
        
        <SwiperSlide className="slide">
          <div className="img-1"> <img  src={PostImage} alt="post" /></div>
          <div className="img-2"> <img  src={PostImage1} alt="post" /> </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="img-1"> <img  src={PostImage} alt="post" /></div>
          <div className="img-2"> <img  src={PostImage1} alt="post" /> </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="img-1"> <img  src={PostImage} alt="post" /></div>
          <div className="img-2"> <img  src={PostImage1} alt="post" /> </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="img-1"> <img  src={PostImage} alt="post" /></div>
          <div className="img-2"> <img  src={PostImage1} alt="post" /> </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="img-1"> <img  src={PostImage} alt="post" /></div>
          <div className="img-2"> <img  src={PostImage1} alt="post" /> </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="img-1"> <img  src={PostImage} alt="post" /></div>
          <div className="img-2"> <img  src={PostImage1} alt="post" /> </div>
          
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="img-1"> <img  src={PostImage} alt="post" /></div>
          <div className="img-2"> <img  src={PostImage1} alt="post" /> </div>
         
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="img-1"> <img  src={PostImage} alt="post" /></div>
          <div className="img-2"> <img  src={PostImage1} alt="post" /> </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="img-1"> <img  src={PostImage} alt="post" /></div>
          <div className="img-2"> <img  src={PostImage1} alt="post" /> </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="img-1"> <img  src={PostImage} alt="post" /></div>
          <div className="img-2"> <img  src={PostImage1} alt="post" /> </div>
        </SwiperSlide>
      
      </Swiper>
        </div>
    </div>
    
  );
};
