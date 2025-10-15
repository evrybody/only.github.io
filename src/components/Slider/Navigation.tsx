import React from "react";

import styled from "styled-components";

import { useSwiper } from "swiper/react";

const NavigationContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 80px;
  margin-top: 20px;
`;

const NavButton = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid var(--blue);
  border-radius: 50%;
  background: white;
  color: var(--blue);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: var(--blue);
    color: white;
  }
`;

const CustomNavigation = () => {
  const swiper = useSwiper();

  return (
    <NavigationContainer>
      <NavButton
        onClick={() => swiper.slidePrev()}
        disabled={!swiper.enabled || swiper.isBeginning}
      >
        ←
      </NavButton>
      <NavButton
        onClick={() => swiper.slideNext()}
        disabled={!swiper.enabled || swiper.isEnd}
      >
        →
      </NavButton>
    </NavigationContainer>
  );
};

export default CustomNavigation;