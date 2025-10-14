import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

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
  display: flex;
  width: 100%;
  margin-left: 80px;
  margin-top: 841px;
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 135px;
`;

const SlideDate = styled.span`
  font-size: 25px;
  color: #3877ee;
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
        spaceBetween={80}
        centeredSlides={false}
        navigation={true}
        modules={[Navigation]}
        loop={false}
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
