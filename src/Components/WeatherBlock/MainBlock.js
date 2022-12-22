import React from "react";
import BigLoc from "../WeatherCards/bigLoc/BigLoc";
import BigLocInfo from "../WeatherCards/bigLocInfo/BigLocInfo";
import SearchLocate from "./../WeatherCards/SearchLocate/SearchLocate";
import "./mainStyles.css";

const MainBlock = ({ weather }, { setQuery }) => {
  return (
    <section className="mainBlock">
      <BigLoc weather={weather} />
      <SearchLocate setQuery={setQuery} />
      <BigLocInfo weather={weather} />
    </section>
  );
};

export default MainBlock;
