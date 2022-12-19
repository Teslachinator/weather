import React from "react";
import GlobalSvgSelector from "../../Helpers/GlobalSvgSelector";
import "./style.css";

const MiniCard = ({ day, day_info, icon_id, temp_day, temp_night, info }) => {
  return (
    <article className="miniCard">
      <div className="miniCard_date">{day}</div>
      <div className="miniCard_dateInfo">{day_info}</div>
      <div className="miniCard_img">
        <GlobalSvgSelector id={icon_id} />
      </div>
      <div className="miniCard_temp__day">{temp_day}</div>
      <div className="miniCard_temp__night">{temp_night}</div>
      <div className="miniCard_temp__weather">{info}</div>
    </article>
  );
};

export default MiniCard;
