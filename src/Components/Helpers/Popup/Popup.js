import React from "react";
import "./popup.css";

const Popup = ({ active, setActive }) => {
  return (
    <div
      className={active ? "popup_bg popActive" : "popup_bg"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "popup popActive" : "popup"}
        onClick={(e) => e.stopPropagation()}
      >
        <p>
          К сожалению сервис OpenWeather не дает возможности показывать прогноз
          погоды на несколько дней вперед бесплатно
        </p>
      </div>
    </div>
  );
};

export default Popup;
