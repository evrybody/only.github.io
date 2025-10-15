import React from "react";

import styled from "styled-components";

import Skeleton from "../Skeleton/Skeleton";


const Section = styled.section`
  position: relative;
  margin-inline: clamp(160px, 12vw, 320px);
  max-width: 1440px;
  border: 1px solid rgba(66, 86, 122, 0.1);
  min-height: 100dvh;

  @media (max-width: 768px) {
    margin-inline: 0;
    max-width: 100%;
    border: none;
  }
`;


const MainSection: React.FC = () => {
  return (
    <Section>
      <Skeleton />
    </Section>
  );
};

export default MainSection;
