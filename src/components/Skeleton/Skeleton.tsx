import React from "react";
import styled from "styled-components";

import { useItemsStore } from "../../store/useItemsStore";
import { useSlidesStore } from "../../store/useSlidesStore";

import Rotator from "../Rotator/Rotator";
import HistoricalDates from "../HistoricalDates/HistoricalDates";
import DateChanger from "../HistoricalDates/DateChanger";
import Slider from "../Slider/Slider";

const SkeletonWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    align-items: flex-end;
  }
`;

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  margin-top: auto;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Cross = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  display: block;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: rgba(66, 86, 122, 0.1);
  }

  &::before {
    width: 100%;
    height: 1px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  &::after {
    width: 1px;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MiddleLine = styled.div`
  display: none;

  @media (max-width: 768px) {
    position: absolute;
    display: block;
    width: calc(100% - 40px);
    height: 1px;
    background-color: #c7cdd9;
    left: 20px;
    margin-top: 80%;
  }
`;

const HistoricalHeader = styled.span`
  position: absolute;
  margin-top: clamp(59px, 10vw, 170px);
  margin-left: clamp(20px, 4vw, 80px);
  font-size: 56px;
  font-weight: bold;
  max-width: 353px;
  color: var(--dark-blue);

  font-size: clamp(1.25rem, 2vw + 1rem, 3.5rem);
`;

const ColoredVector = styled.div`
  position: absolute;
  margin-top: 177px;
  width: 5px;
  height: clamp(50px, 8vw, 120px);
  background: linear-gradient(var(--blue), #ef5da8);

  @media (max-width: 768px) {
    display: none;
  }
`;

const RotatorWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Skeleton: React.FC = () => {
  const { items, activeIndex } = useItemsStore();
  const { getSlidesByIndex } = useSlidesStore();

  const currentSlides = getSlidesByIndex(activeIndex);

  return (
    <>
      <HistoricalHeader>
        Исторические
        <br />
        даты
      </HistoricalHeader>
      <ColoredVector />
      <MiddleLine />
      <SkeletonWrapper>
        <DateChanger />
        <RotatorWrapper>
          <Rotator items={items} />
        </RotatorWrapper>
        <Cross />
        <HistoricalDates />
        <FooterWrapper>
          <Slider slides={currentSlides} />
        </FooterWrapper>
      </SkeletonWrapper>
    </>
  );
};

export default Skeleton;
