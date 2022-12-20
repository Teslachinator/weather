import React from "react";
import "./style.css";

import MainBlock from "../WeatherBlocks/MainBlock";
import ForeCast from "../WeatherBlocks/ForeCast";

const Main = ({ weather }) => {
  return (
    <main>
      <MainBlock weather={weather} />
      <ForeCast />
    </main>
  );
};

export default Main;
