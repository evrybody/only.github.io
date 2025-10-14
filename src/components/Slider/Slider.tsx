import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import CustomNavigation from "./Navigation";

import "swiper/css/navigation";
import "swiper/css";

import styled from "styled-components";

interface ISlideData {
  slideNumber: number;
  date: number;
  content: string;
}

interface ISliderProps {
  slides: ISlideData[];
}

const SlideContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1320px;
  margin-top: 841px;
  margin-left: 80px;
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
`;

const SlideDate = styled.span`
  font-size: 25px;
  color: #3877ee;
  margin-bottom: 22px;
`;

const SlideContent = styled.p`
  color: #42567a;
  font-size: 20px;
`;

const Slider: React.FC<ISliderProps> = ({ slides }) => {
  return (
    <SlideContainer>
      <Swiper
        grabCursor={true}
        slidesPerView={3}
        centeredSlides={false}
        modules={[Navigation]}
        loop={false}
        navigation={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.slideNumber}>
            <Slide>
              <SlideDate>{slide.date}</SlideDate>
              <SlideContent>{slide.content}</SlideContent>
            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </SlideContainer>
  );
};

export default Slider;
