import React from "react";
import "./style.css";
import temp from "./Group.svg";
import pressure from "./pressure.svg";
import precipilation from "./Group3.svg";
import wind from "./Group4.svg";
const BigLocInfo = () => {
  const value = {
    info_temp: "20° - ощущается как 17°",
    info_pressure: "765 мм ртутного столба - нормальное",
    info_precipilation: "Без осадков",
    info_wind: "3 м/с юго-запад - легкий ветер",
  };
  return (
    <article className="info">
      <ul>
        <li>
          <div className="info_logo-bg">
            <img className="info_logo" src={temp} alt="#" />
          </div>
          <p className="property">Температура</p>
          <p className="textCont">{value.info_temp}</p>
        </li>
        <li>
          <div className="info_logo-bg">
            <img className="info_logo" src={pressure} alt="#" />
          </div>
          <p className="property">Давление </p>
          <p className="textCont">{value.info_pressure}</p>
        </li>
        <li>
          <div className="info_logo-bg">
            <img className="info_logo" src={precipilation} alt="#" />
          </div>
          <p className="property">Осадки</p>
          <p className="textCont">{value.info_precipilation}</p>
        </li>
        <li>
          <div className="info_logo-bg">
            <img className="info_logo" src={wind} alt="#" />
          </div>
          <p className="property">Ветер</p>
          <p className="textCont">{value.info_wind}</p>
        </li>
      </ul>
    </article>
  );
};

export default BigLocInfo;
