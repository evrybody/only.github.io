import React from "react";
import styled from "styled-components";
import { useItemsStore } from "../../store/useItemsStore";

const SectionWrapper = styled.section`
  position: absolute;
  width: 120px;
  height: 88px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 697px;
  margin-left: 80px;
  z-index: 1000;
`;

const Pagination = styled.div`
  color: #42567a;
  text-align: center;
  font-size: 14px;
  max-width: 36px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border: 1px solid #42567a;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
  color: #42567a;

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
              stroke="#42567A"
              stroke-width="2"
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
              stroke="#42567A"
              stroke-width="2"
            />
          </svg>
        </Button>
      </ButtonsWrapper>
    </SectionWrapper>
  );
};

export default DateChanger;
