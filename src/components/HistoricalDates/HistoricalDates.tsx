import React from "react";
import styled from "styled-components";
import { useDatesStore } from "../../store/useDatesStore";
import { useItemsStore } from "../../store/useItemsStore";

const DatesWrapper = styled.div`
  display: flex;
  position: absolute;
  font-size: 200px;
  font-weight: bold;
  gap: 5rem;
  left: 50%;
  transform: translateX(-50%);
`;

const LeftDate = styled.span`
  color: #5d5fef;
`;

const RightDate = styled.span`
  color: #ef5da8;
`;

const HistoricalDates: React.FC = () => {
  const { activeIndex } = useItemsStore();
  const { items } = useDatesStore();

  const activeInterval = items.find(
    (item: { index: number; interval: [number, number] }) =>
      item.index === activeIndex
  )?.interval;

  if (!activeInterval) return null;

  const [start, end] = activeInterval;

  return (
    <DatesWrapper>
      <LeftDate>{start}</LeftDate>
      <RightDate>{end}</RightDate>
    </DatesWrapper>
  );
};

export default HistoricalDates;
