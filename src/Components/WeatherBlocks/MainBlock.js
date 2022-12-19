import React from "react";
import BigLoc from "../WeatherCards/bigLoc/BigLoc";
import BigLocInfo from "../WeatherCards/bigLocInfo/BigLocInfo";
import "./styles.css";

const MainBlock = () => {
  return (
    <section className="mainBlock">
      <BigLoc />
      <BigLocInfo />
    </section>
  );
};

export default MainBlock;
