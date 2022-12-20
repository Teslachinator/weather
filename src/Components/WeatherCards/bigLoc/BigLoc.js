import React from "react";
import sunny from "./Sun.svg";
import "./style.css";

const BigLoc = ({ weather: { dt, name, country, temp } }) => {
  const time = new Date(dt * 1000).getTime() / 1000;

  return (
    <article className="bigloc">
      <div className="degries">{temp}</div>
      {/* <div className="date">{value.date}</div> */}
      <img className="img" src={sunny} alt="#" />
      <div className="time">Время: {time}</div>
      <div className="location">
        Город: {name},{country}
      </div>
    </article>
  );
};

export default BigLoc;
