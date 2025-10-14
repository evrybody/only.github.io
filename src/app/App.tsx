import React from "react";

import { GlobalStyle } from "../global";

import MainSection from "../components/MainSection/Main";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <MainSection />
    </>
  );
};

export default App;
