import React from "react";
import logo from "./Logo.svg";
import errs from "./Error.svg";
import "./headerStyle.css";

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
      <div className="navigation_error">
        <button>
          <img src={errs} alt="#" />
        </button>
      </div>
      <div className="navigation_teme">
        <button>
          <img src={btn} alt="#" />
        </button>
      </div>
    </header>
  );
};

export default Header;
