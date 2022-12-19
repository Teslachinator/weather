import React from "react";
import logo from "./Logo.svg";
import "./style.css";

import btn from "./Vector.svg";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img className="logoImg" src={logo} alt="#" />
        <div className="strong">
          <p>Погода и точка</p>
        </div>
      </div>
      <div className="navigation">
        <button>
          <img src={btn} alt="#" />
        </button>

        <select name="Выбрать город" id="12">
          <option value="spb">Питер</option>
          <option value="moscow">Москва</option>
          <option defaultValue={"konakovo"}>Конаково</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
