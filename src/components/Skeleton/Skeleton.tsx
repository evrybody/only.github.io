import React from "react";
import styled from "styled-components";

import { useItemsStore } from "../../store/useItemsStore";
import { useSlidesStore } from "../../store/useSlidesStore";

import Rotator from "../Rotator/Rotator";
import HistoricalDates from "../HistoricalDates/HistoricalDates";
import DateChanger from "../HistoricalDates/DateChanger";
import Slider from "../Slider/Slider";

const SkeletonWrapper = styled.section`
  display: contents;
`;

const Cross = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;

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
`;

const HistoricalHeader = styled.span`
  grid-column: 1;
  margin-top: 170px;
  margin-left: 80px;
  font-size: 56px;
  font-weight: bold;
  max-width: 353px;
  color: #42567a;
`;

const ColoredVector = styled.div`
  grid-column: 1;
  margin-top: 177px;
  margin-left: 2px;
  width: 5px;
  height: 120px;
  background: linear-gradient(#3877ee, #ef5da8);
`;

const SidebarStack = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
`;

const ContentArea = styled.div`
  grid-column: 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 1080px;
`;

const Skeleton: React.FC = () => {
  const { items, activeIndex } = useItemsStore();
  const { getSlidesByIndex } = useSlidesStore();

  const currentSlides = getSlidesByIndex(activeIndex);
  return (
    <SkeletonWrapper>
      <SidebarStack>
        <HistoricalHeader>Исторические даты</HistoricalHeader>
        <ColoredVector />
        <DateChanger />
      </SidebarStack>
      <ContentArea>
        <Rotator items={items} />
        <Cross />
        <HistoricalDates />
        <Slider slides={currentSlides} />
      </ContentArea>
    </SkeletonWrapper>
  );
};

export default Skeleton;
