import React from "react";
import "./bigLocInfoStyle.css";
import tempSVG from "./SVG/Group.svg";
import presSVG from "./SVG/pressure.svg";
import precipilation from "./SVG/Group3.svg";
import wind from "./SVG/Group4.svg";
const BigLocInfo = ({
  weather: {
    speed,
    pressure,
    humidity,
    windWirection,
    feels_like,
    visibility,
    sunrise,
    description,
    sunset,
    temp,
  },
}) => {
  return (
    <article className="info">
      <ul>
        <li>
          <div className="info_logo-bg">
            <img className="info_logo" src={tempSVG} alt="#" />
          </div>
          <p className="property">Температура</p>
          <p className="textCont">
            {temp}° - ощущается как {feels_like}°
          </p>
        </li>
        <li>
          <div className="info_logo-bg">
            <img className="info_logo" src={presSVG} alt="#" />
          </div>
          <p className="property">Давление </p>
          <p className="textCont">{pressure} мм ртутного столба</p>
        </li>
        <li>
          <div className="info_logo-bg">
            <img className="info_logo" src={precipilation} alt="#" />
          </div>
          <p className="property">Влажность</p>
          <p className="textCont">{humidity}%</p>
        </li>
        <li>
          <div className="info_logo-bg">
            <img className="info_logo" src={wind} alt="#" />
          </div>
          <p className="property">Ветер</p>
          <p className="textCont">
            {speed} м/с {windWirection}
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <div className="info_logo-bg">
            <img className="info_logo" src={tempSVG} alt="#" />
          </div>
          <p className="property">Восход</p>
          <p className="textCont">Время: {sunset}</p>
        </li>
        <li>
          <div className="info_logo-bg">
            <img className="info_logo" src={tempSVG} alt="#" />
          </div>
          <p className="property">Закат</p>
          <p className="textCont">Время: {sunrise}</p>
        </li>
        <li>
          <div className="info_logo-bg">
            <img className="info_logo" src={tempSVG} alt="#" />
          </div>
          <p className="property">Осадки</p>
          <p className="textCont">{description}</p>
        </li>
        <li>
          <div className="info_logo-bg">
            <img className="info_logo" src={tempSVG} alt="#" />
          </div>
          <p className="property">Видимость</p>
          <p className="textCont">{visibility}</p>
        </li>
      </ul>
    </article>
  );
};

export default BigLocInfo;
