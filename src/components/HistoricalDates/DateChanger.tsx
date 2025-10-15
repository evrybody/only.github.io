import React from "react";
import styled from "styled-components";
import { useItemsStore } from "../../store/useItemsStore";

const SectionWrapper = styled.section`
  position: absolute;
  width: max-content;
  margin-top: 45vh;
  margin-left: 80px;
  left: 0;

  z-index: 10;

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 0 20px 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Pagination = styled.div`
  color: var(--dark-blue);
  text-align: center;
  margin-bottom: clamp(5px, 2vw, 20px);
  font-size: 14px;
  max-width: 36px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: clamp(10px, 2vw, 20px);
`;

const Button = styled.button`
  width: clamp(25px, 5vw, 50px);
  height: clamp(25px, 5vw, 50px);

  background-color: #fff;
  border: 1px solid var(--dark-blue);
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
  color: var(--dark-blue);

  svg {
    width: clamp(5px, 2vw, 10px);
    height: clamp(7px, 3vw, 14px);
  }

  &:hover {
    background-color: #f0f0f0;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const DateChanger: React.FC = () => {
  const { items, activeIndex, setActiveIndex } = useItemsStore();

  const handleLeft = () => {
    if (activeIndex > 1) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleRight = () => {
    if (activeIndex < items.length) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <SectionWrapper>
      <Pagination>
        {activeIndex} / {items.length}
      </Pagination>
      <ButtonsWrapper>
        <Button onClick={handleLeft} disabled={activeIndex <= 1}>
          <svg
            width="10"
            height="14"
            viewBox="0 0 10 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
              stroke="var(--dark-blue)"
              strokeWidth="2"
            />
          </svg>
        </Button>
        <Button onClick={handleRight} disabled={activeIndex >= items.length}>
          <svg
            width="10"
            height="14"
            viewBox="0 0 10 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.50012 0.750001L7.75012 7L1.50012 13.25"
              stroke="var(--dark-blue)"
              strokeWidth="2"
            />
          </svg>
        </Button>
      </ButtonsWrapper>
    </SectionWrapper>
  );
};

export default DateChanger;
