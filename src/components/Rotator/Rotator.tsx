import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useItemsStore } from "../../store/useItemsStore";

interface CircleProps {
  items: { index: number; title: string }[];
}

const Circle = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 50%);
  width: clamp(18.75rem, 30vw, 33.5rem);
  height: clamp(18.75rem, 30vw, 33.5rem);
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.1);
  overflow: visible;
`;

const DotsLayer = styled.div<{ rotation: number }>`
  position: absolute;
  width: clamp(18.75rem, 30vw, 33.5rem);
  height: clamp(18.75rem, 30vw, 33.5rem);
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
  background-color: ${(props) =>
    props.active ? "#f4f5f9" : "var(--dark-blue)"};
  border-radius: 50%;
  border: ${(props) => (props.active ? "1px solid var(--black-blue)" : "none")};
  color: ${(props) => (props.active ? "var(--dark-blue)" : "transparent")};
  cursor: pointer;
  z-index: 2;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  transform: ${(p) => `translate(-50%, -50%) rotate(${-p.rotation}rad)`};
  transition: all 0.3s ease-in-out;

  &:hover {
    width: 56px;
    height: 56px;
    background-color: #f4f5f9;
    border: 1px solid var(--black-blue);
    color: var(--dark-blue);
    font-weight: bold;
  }
`;

const Title = styled.span`
  position: relative;
  left: clamp(10%, 40vw, 100%);
  font-size: clamp(14px, 2vw, 20px);
  font-weight: bold;
`;

const Rotator: React.FC<CircleProps> = ({ items }) => {
  const { activeIndex, setActiveIndex } = useItemsStore();
  const circleRef = React.useRef<HTMLDivElement>(null);

  const [rotationOffset, setRotationOffset] = useState(0);
  const [size, setSize] = useState({ width: 536, height: 536 });

  const count = items.length;
  const startAngle = -Math.PI;
  const desiredAngle = -Math.PI / 3;

  const angleForIndex = (idx: number) =>
    startAngle + (2 * Math.PI * (idx % count)) / count;

  const normalizeDelta = (delta: number) =>
    Math.atan2(Math.sin(delta), Math.cos(delta));

  useEffect(() => {
    const updateSize = () => {
      if (circleRef.current) {
        const rect = circleRef.current.getBoundingClientRect();
        setSize({ width: rect.width, height: rect.height });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const cx = size.width / 2;
  const cy = size.height / 2;

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
    <Circle ref={circleRef}>
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
