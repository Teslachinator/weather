import React from "react";
import BigLoc from "../WeatherCards/bigLoc/BigLoc";
import BigLocInfo from "../WeatherCards/bigLocInfo/BigLocInfo";
import "./styles.css";

const MainBlock = ({ weather }) => {
  return (
    <section className="mainBlock">
      <BigLoc weather={weather} />
      <BigLocInfo weather={weather} />
    </section>
  );
};

export default MainBlock;
