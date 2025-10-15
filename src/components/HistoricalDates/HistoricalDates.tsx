import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { useDatesStore } from "../../store/useDatesStore";
import { useItemsStore } from "../../store/useItemsStore";

const DatesWrapper = styled.div`
  position: absolute;
  display: flex;
  gap: clamp(2rem, 5vw, 6rem);
  font-weight: bold;
  pointer-events: none;

  font-size: clamp(3.5rem, 10vw, 12.5rem);

  @media (max-width: 768px) {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 76px;
  }
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

  const leftRef = useRef<HTMLSpanElement>(null);
  const rightRef = useRef<HTMLSpanElement>(null);

  const activeInterval = items.find(
    (item) => item.index === activeIndex
  )?.interval;
  const [start, end] = activeInterval || [];

  const prevValues = useRef<{ start: number; end: number }>({
    start: start || 0,
    end: end || 0,
  });

  useEffect(() => {
    if (!activeInterval || !leftRef.current || !rightRef.current) return;

    const [newStart, newEnd] = activeInterval;
    const { start: oldStart, end: oldEnd } = prevValues.current;

    const obj = { left: oldStart, right: oldEnd };
    const tl = gsap.timeline();

    tl.to(obj, {
      left: newStart,
      right: newEnd,
      duration: 1.2,
      ease: "power2.out",
      onUpdate: () => {
        if (leftRef.current) {
          leftRef.current.textContent = Math.round(obj.left).toString();
        }
        if (rightRef.current) {
          rightRef.current.textContent = Math.round(obj.right).toString();
        }
      },
    });

    prevValues.current = { start: newStart, end: newEnd };
  }, [activeInterval]);

  return (
    <DatesWrapper>
      <LeftDate ref={leftRef}>{start}</LeftDate>
      <RightDate ref={rightRef}>{end}</RightDate>
    </DatesWrapper>
  );
};

export default HistoricalDates;
