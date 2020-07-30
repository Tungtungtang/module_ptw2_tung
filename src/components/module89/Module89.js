import React, { Component } from 'react';
import './sass/Module89.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import PostImage from "./images/icon-play-2.png";
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Module89() {
  return (
    <div className="type-89">
      <div className="container">
        <div className="title">
          <div className="title_top">T E S T I M O N I A L </div>
          <h1 >Happy Customers
          </h1>
          <div className="title_small">Trusted by some of the world’s biggest brands.</div>
        </div>

        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          // navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="swiperjs">

          <SwiperSlide className="slide">
            <a href="/#" className="play_icon">
              <img src={PostImage} alt="post" />
              <span> Play video</span>
            </a>
            <div className="contents_swiper"> Tico has impacted the way our business operates,
                so much so that it now contributes to our strategy going forward as it relates to growth,
                expansion, and new opportunities for our clients and our employees. 
            </div>
            <h4>David Rae</h4>
            <div>CEO</div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <a href="/#" className="play_icon">
              <img src={PostImage} alt="post" />
              <span> Play video</span>
            </a>
            <div className="contents_swiper"> Tico has impacted the way our business operates,
                so much so that it now contributes to our strategy going forward as it relates to growth,
                expansion, and new opportunities for our clients and our employees. 
            </div>
            <h4>David Rae</h4>
            <div>CEO</div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <a href="/#" className="play_icon">
              <img src={PostImage} alt="post" />
              <span> Play video</span>
            </a>
            <div className="contents_swiper"> Tico has impacted the way our business operates,
                so much so that it now contributes to our strategy going forward as it relates to growth,
                expansion, and new opportunities for our clients and our employees. 
            </div>
            <h4>David Rae</h4>
            <div>CEO</div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>

  );
};
