import sun from "./IconsWeather/Sun.svg";
import small_rain_sun from "./IconsWeather/Group 44.svg";
import small_rain from "./IconsWeather/SmallRain.svg";
import mainly_cloudy from "./IconsWeather/Group 45.svg";
import rain from "./IconsWeather/Rain.svg";
import snow from "./IconsWeather/Group 48.svg";
import storm from "./IconsWeather/Group 46.svg";
import lightning from "./IconsWeather/Group 49.svg";

const GlobalSvgSelector = ({ id }) => {
  switch (id) {
    case "sun":
      return <img src={sun} alt="#" />;
    case "small_rain_sun":
      return <img src={small_rain_sun} alt="" />;
    case "small_rain":
      return <img src={small_rain} alt="" />;
    case "03n":
      return <img src={mainly_cloudy} alt="" />;
    case "rain":
      return <img src={rain} alt="" />;
    case "snow":
      return <img src={snow} alt="" />;
    case "storm":
      return <img src={storm} alt="" />;
    case "lightning":
      return <img src={lightning} alt="" />;
    default:
      return null;
  }
};

export default GlobalSvgSelector;
