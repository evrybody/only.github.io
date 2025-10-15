import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { useItemsStore } from "../../store/useItemsStore";

interface CircleProps {
  items: { index: number; title: string }[];
}

const Circle = styled.div`
  position: relative;
  width: 536px;
  height: 536px;
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.1);
  overflow: visible;
`;

const DotsLayer = styled.div<{ rotation: number }>`
  position: absolute;
  width: 536px;
  height: 536px;
  border-radius: 50%;
  inset: 0;
  transform-origin: 50% 50%;
  transition: transform 0.6s ease-in-out;
  transform: ${(p) => `rotate(${p.rotation}rad)`};
`;

const Dot = styled.div<{ active: boolean; rotation: number }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.active ? "56px" : "6px")};
  height: ${(props) => (props.active ? "56px" : "6px")};
  background-color: ${(props) => (props.active ? "#f4f5f9" : "#42567a")};
  border-radius: 50%;
  border: ${(props) => (props.active ? "1px solid #303e58" : "none")};
  color: ${(props) => (props.active ? "#42567a" : "transparent")};
  cursor: pointer;
  z-index: 2;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  transform: ${(p) => `translate(-50%, -50%) rotate(${-p.rotation}rad)`};
  transition: all 0.3s ease-in-out;

  &:hover {
    width: 56px;
    height: 56px;
    background-color: #f4f5f9;
    border: 1px solid #303e58;
    color: #42567a;
    font-weight: bold;
  }
`;

const Title = styled.span`
  position: relative;
  left: 100%;
  font-size: 20px;
  font-weight: bold;
`;

const Rotator: React.FC<CircleProps> = ({ items }) => {
  const { activeIndex, setActiveIndex } = useItemsStore();

  const width = 536;
  const height = 536;
  const cx = width / 2;
  const cy = height / 2;
  const count = items.length;
  const startAngle = -Math.PI;
  const desiredAngle = -Math.PI / 3;

  const [rotationOffset, setRotationOffset] = useState(0);

  const angleForIndex = (idx: number) =>
    startAngle + (2 * Math.PI * (idx % count)) / count;

  const normalizeDelta = (delta: number) =>
    Math.atan2(Math.sin(delta), Math.cos(delta));

  useEffect(() => {
    const activeIdx = items.findIndex((i) => i.index === activeIndex);
    if (activeIdx === -1 || count === 0) return;

    setRotationOffset((prev) => {
      const currentActiveAngle = angleForIndex(activeIdx) + prev;
      const delta = desiredAngle - currentActiveAngle;
      const shortest = normalizeDelta(delta);
      return prev + shortest;
    });
  }, [activeIndex, items, count]);

  return (
    <Circle>
      <DotsLayer rotation={rotationOffset}>
        {items.map((item, idx) => {
          const baseAngle = angleForIndex(idx);
          const x = cx + cx * Math.cos(baseAngle);
          const y = cy + cy * Math.sin(baseAngle);
          const isActive = item.index === activeIndex;
          return (
            <Dot
              key={item.index}
              style={{ left: x, top: y }}
              active={isActive}
              rotation={rotationOffset}
              onClick={() => setActiveIndex(item.index)}
            >
              {idx + 1}
            </Dot>
          );
        })}
      </DotsLayer>
      <Title>{items.find((item) => item.index === activeIndex)?.title}</Title>
    </Circle>
  );
};

export default Rotator;
