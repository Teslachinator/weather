import React from "react";
import MiniCard from "../WeatherCards/miniCard/MiniCard";
import SortWeather from "./SortWeather";
import "./styles.css";
import { days } from "./../../Components/Helpers/days";

const ForeCast = () => {
  return (
    <section className="forecast">
      <SortWeather />
      <div className="forecast_more">
        {days.map((project) => {
          return (
            <MiniCard
              day={project.day}
              day_info={project.day_info}
              icon_id={project.icon_id}
              temp_day={project.temp_day}
              temp_night={project.temp_night}
              info={project.info}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ForeCast;
