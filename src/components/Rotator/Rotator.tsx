import React from "react";
import styled from "styled-components";
import { useItemsStore } from "../../store/useItemsStore";

interface CircleProps {
  items: { index: number; title: string }[];
}

const Circle = styled.div`
  position: relative;
  width: 536px;
  height: 530px;
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.1);
`;

const Dot = styled.div<{ active: boolean }>`
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
  transition: all 0.3s ease;
  transform: translate(-50%, -50%);

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

  const width = 540;
  const height = 534;
  const dotSize = 6;
  const cx = width / 2;
  const cy = height / 2;
  const rx = (width - dotSize) / 2;
  const ry = (height - dotSize) / 2;
  const count = items.length;
  const startAngle = -Math.PI;

  return (
    <Circle>
      {items.map((item, idx) => {
        const k = idx % count;
        const angle = startAngle + (2 * Math.PI * k) / count;
        const x = cx + rx * Math.cos(angle) - dotSize / 2;
        const y = cy + ry * Math.sin(angle) - dotSize / 2;
        const isActive = item.index === activeIndex;
        return (
          <Dot
            key={item.index}
            style={{ left: x, top: y }}
            active={isActive}
            onClick={() => setActiveIndex(item.index)}
          >
            {idx + 1}
          </Dot>
        );
      })}
      <Title>{items.find((item) => item.index === activeIndex)?.title}</Title>
    </Circle>
  );
};

export default Rotator;
