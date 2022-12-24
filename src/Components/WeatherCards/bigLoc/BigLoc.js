import React from "react";
import "./bigLocStyle.css";

const BigLoc = ({ weather: { dt, name, country, temp }, icon }) => {
  return (
    <article className="bigloc">
      <div className="degries">{temp}°</div>
      <div className="date">Сегодня</div>
      <img className="img" alt="#" />
      {/* src={GlobalSvgSelector(icon)} */}
      <div className="time">Время: {dt}</div>
      <div className="location">
        Город: {name}, {country}
      </div>
    </article>
  );
};

export default BigLoc;
