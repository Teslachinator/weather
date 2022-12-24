import React, { useState } from "react";
import logo from "./Logo.svg";
import errs from "./Error.svg";
import "./headerStyle.css";
import btn from "./Vector.svg";
import Popup from "../Helpers/Popup/Popup";
const Header = () => {
  const [popupActive, setPopupActive] = useState(false);
  return (
    <header>
      <div className="logo">
        <img className="logoImg" src={logo} alt="#" />
        <div className="strong">
          <p>Погода и точка</p>
        </div>
      </div>
      <div className="navigation_error" onClick={() => setPopupActive(true)}>
        <button>
          <img src={errs} alt="#" />
        </button>
      </div>
      <div className="navigation_teme">
        <button>
          <img src={btn} alt="#" />
        </button>
      </div>
      <Popup active={popupActive} setActive={setPopupActive}>
        <p>
          К сожалению сервис OpenWeather не дает возможности показывать прогноз
          погоды на несколько дней вперед бесплатно
        </p>
      </Popup>
    </header>
  );
};

export default Header;
