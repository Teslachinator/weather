import React from "react";
import BigLoc from "../WeatherCards/bigLoc/BigLoc";
import BigLocInfo from "../WeatherCards/bigLocInfo/BigLocInfo";
import SearchLocate from "./../WeatherCards/SearchLocate/SearchLocate";
import "./mainStyles.css";

const MainBlock = ({ weather }) => {
  return (
    <section className="mainBlock">
      <BigLoc weather={weather} />
      <SearchLocate />
      <BigLocInfo weather={weather} />
    </section>
  );
};

export default MainBlock;
