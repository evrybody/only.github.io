import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
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

const SwiperContainer = styled.div`
  position: absolute;
  top: 841px;
  width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
`;

const NextButton = styled.button`
  position: absolute;
  right: 0;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  margin-right: 40px;
  transition: all 0.3s ease-in-out;

  &:disabled {
    display: none;
  }
`;

const PrevButton = styled(NextButton)`
  margin-left: 40px;
  right: auto;
  left: 0;
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
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
  const swiperRef = useRef<SwiperType | null>(null);
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);

  return (
    <SwiperContainer>
      <PrevButton
        aria-label="Previous slide"
        onClick={() => swiperRef.current?.slidePrev()}
        disabled={isBeginning}
      >
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 11L2 6L7 1" stroke="#3877EE" strokeWidth="2" />
        </svg>
      </PrevButton>
      <SlideContainer>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsEnd(swiper.isEnd);
            setIsBeginning(swiper.isBeginning);
          }}
          onSlideChange={(swiper) => {
            setIsEnd(swiper.isEnd);
            setIsBeginning(swiper.isBeginning);
          }}
          grabCursor={true}
          slidesPerView={3}
          centeredSlides={false}
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
      <NextButton
        aria-label="Next slide"
        onClick={() => swiperRef.current?.slideNext()}
        disabled={isEnd}
      >
        <svg
          width="5"
          height="10"
          viewBox="0 0 5 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L4 5L1 9"
            stroke="#3877EE"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </NextButton>
    </SwiperContainer>
  );
};

export default Slider;
