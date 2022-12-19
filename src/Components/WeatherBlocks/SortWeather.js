import React from "react";

const SortWeather = () => {
  return (
    <nav className="filter">
      <div className="sort">
        <div className="sort_week sort_bg sort_active">На неделю</div>
        <div className="sort_days sort_bg">На 10 дней</div>
        <div className="sort_hours sort_bg ">По часам</div>
      </div>
    </nav>
  );
};

export default SortWeather;
