import React from "react";
import sunny from "./Sun.svg";
import "./bigLocStyle.css";

const BigLoc = ({ weather: { dt, name, country, temp } }) => {
  return (
    <article className="bigloc">
      <div className="degries">{temp}°</div>
      <div className="date">Сегодня</div>
      <img className="img" src={sunny} alt="#" />
      <div className="time">Время: {dt}</div>
      <div className="location">
        Город: {name}, {country}
      </div>
    </article>
  );
};

export default BigLoc;
