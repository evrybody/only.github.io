import React from "react";

import styled from "styled-components";

import Skeleton from "../Skeleton/Skeleton";


const Section = styled.section`
  position: relative;
  max-width: 1440px;
  margin-left: 240px;
  border: 1px solid rgba(66, 86, 122, 0.1);
  min-height: 100dvh;
`;

const MainSection: React.FC = () => {
  return (
    <Section>
      <Skeleton />
    </Section>
  );
};

export default MainSection;
