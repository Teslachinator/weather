import React from "react";
import "./style.css";

import MainBlock from "../WeatherBlocks/MainBlock";
import ForeCast from "../WeatherBlocks/ForeCast";

const Main = () => {
  return (
    <main>
      <MainBlock />
      <ForeCast />
    </main>
  );
};

export default Main;
