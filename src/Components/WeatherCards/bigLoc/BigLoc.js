import React from "react";
import sunny from "./Sun.svg";
import "./style.css";

const BigLoc = () => {
  const value = {
    degries: "20°",
    date: "Сегодня",
    time: "21:54",
    location: "Конаково",
  };
  return (
    <article className="bigloc">
      <div className="degries">{value.degries}</div>
      <div className="date">{value.date}</div>
      <img className="img" src={sunny} alt="#" />
      <div className="time">Время: {value.time}</div>
      <div className="location">Город: {value.location}</div>
    </article>
  );
};

export default BigLoc;
