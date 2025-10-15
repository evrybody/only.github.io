import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

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
  position: relative;
  width: 100%;
  top: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    .swiper-slide {
      transition: opacity 0.3s ease;

      &:not(.swiper-slide-active) {
        opacity: 0.5;
      }

      &.swiper-slide-active {
        opacity: 1;
      }
    }

    .swiper-pagination {
      position: relative;
      padding-top: 7rem;
    }

    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      background: var(--dark-blue);
      opacity: 0.4;
      margin: 0 5px;
    }

    .swiper-pagination-bullet-active {
      opacity: 1;
      background: var(--dark-blue);
    }
  }
`;

const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  width: min(1200px, 100%);
`;

const NextButton = styled.button`
  position: absolute;
  right: 0;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  margin-right: 40px;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const PrevButton = styled(NextButton)`
  margin-left: 40px;
  right: auto;
  left: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 135px;

  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

const SlideDate = styled.span`
  font-size: 25px;
  color: var(--blue);
  margin-bottom: 22px;
`;

const SlideContent = styled.p`
  color: var(--dark-blue);
  font-size: 20px;

  @media (max-width: 768px) {
    height: 80px;
    font-size: 14px;
  }
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
          <path d="M7 11L2 6L7 1" stroke="var(--blue)" strokeWidth="2" />
        </svg>
      </PrevButton>
      <SlideContainer>
        <Swiper
          modules={[Pagination]}
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
          slidesPerView={3.5}
          breakpoints={{
            0: {
              slidesPerView: 1.3,
              spaceBetween: 25,
              pagination: {
                enabled: true,
                clickable: true,
              },
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 50,
              pagination: {
                enabled: true,
                clickable: false,
              },
            },
            1024: {
              spaceBetween: 101,
              pagination: { enabled: false },
            },
          }}
          pagination={{
            clickable: true,
          }}
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
            stroke="var(--blue)"
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
