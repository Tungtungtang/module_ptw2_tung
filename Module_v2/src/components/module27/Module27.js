import React, { Component } from 'react';
import './sass/Module27.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import PostImage from "./images/beauty.jpg";
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Module21() {
  return (
    <div className="type-21">
      
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="swiperjs">
        <SwiperSlide className="slide">
          <div className="content-slide">
            <img src={PostImage} alt="post" />
            <span className="nl-contents-left">
              <h4 className="name-img-left" href="/#">
                <a> Beautyful </a>
              </h4>
              <p> Enjoy the best places in… </p>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="content-slide">
            <img src={PostImage} alt="post" />
            <span className="nl-contents-left">
              <h4 className="name-img-left" href="/#">
                <a> Beautyful </a>
              </h4>
              <p> Enjoy the best places in… </p>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="content-slide">
            <img src={PostImage} alt="post" />
            <span className="nl-contents-left">
              <h4 className="name-img-left" href="/#">
                <a> Beautyful </a>
              </h4>
              <p> Enjoy the best places in… </p>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="content-slide">
            <img src={PostImage} alt="post" />
            <span className="nl-contents-left">
              <h4 className="name-img-left" href="/#">
                <a> Beautyful </a>
              </h4>
              <p> Enjoy the best places in… </p>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="content-slide">
            <img src={PostImage} alt="post" />
            <span className="nl-contents-left">
              <h4 className="name-img-left" href="/#">
                <a> Beautyful </a>
              </h4>
              <p> Enjoy the best places in… </p>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="content-slide">
            <img src={PostImage} alt="post" />
            <span className="nl-contents-left">
              <h4 className="name-img-left" href="/#">
                <a> Beautyful </a>
              </h4>
              <p> Enjoy the best places in… </p>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="content-slide">
            <img src={PostImage} alt="post" />
            <span className="nl-contents-left">
              <h4 className="name-img-left" href="/#">
                <a> Beautyful </a>
              </h4>
              <p> Enjoy the best places in… </p>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="content-slide">
            <img src={PostImage} alt="post" />
            <span className="nl-contents-left">
              <h4 className="name-img-left" href="/#">
                <a> Beautyful </a>
              </h4>
              <p> Enjoy the best places in… </p>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="content-slide">
            <img src={PostImage} alt="post" />
            <span className="nl-contents-left">
              <h4 className="name-img-left" href="/#">
                <a> Beautyful </a>
              </h4>
              <p> Enjoy the best places in… </p>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="content-slide">
            <img src={PostImage} alt="post" />
            <span className="nl-contents-left">
              <h4 className="name-img-left" href="/#">
                <a> Beautyful </a>
              </h4>
              <p> Enjoy the best places in… </p>
            </span>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>

  );
};
