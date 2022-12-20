import API_KEY from "./../token";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({
    ...searchParams,
    units: "metric",
    lang: "ru",
    appid: API_KEY,
  });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWather = (data) => {
  let {
    main: { temp, temp_min, temp_max, humidity, pressure },
    visibility,
    name,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed, deg },
  } = data;

  let windWirection = "север";

  if (337.5 <= deg && deg < 22.5) {
    windWirection = "cевер";
  } else if (22.5 <= deg && deg < 67.5) {
    windWirection = "cеверо - восток";
  } else if (67.5 <= deg && deg < 112.5) {
    windWirection = "восток";
  } else if (112.5 <= deg && deg < 157.5) {
    windWirection = "юго - восток";
  } else if (157.5 <= deg && deg < 202.5) {
    windWirection = "юг";
  } else if (202.5 <= deg && deg < 247.5) {
    windWirection = "юго - запад";
  } else if (247.5 <= deg && deg < 292.5) {
    windWirection = "запад";
  } else if (292.5 <= deg && deg < 337.5) {
    windWirection = "северо - запад";
  }

  pressure = Math.round(pressure * 0.750064);
  sunrise = new Date(sunrise * 1000);
  sunset = new Date(sunset * 1000);
  temp = Math.round(temp);
  temp_max = Math.round(temp_max);
  temp_min = Math.round(temp_min);
  speed = speed.toFixed(1);

  const { main: details, icon } = weather[0];

  return {
    temp,
    temp_min,
    temp_max,
    humidity,
    visibility,
    name,
    deg,
    windWirection,
    country,
    sunrise,
    sunset,
    weather,
    details,
    pressure,
    icon,
    speed,
  };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWather);

  return { ...formattedCurrentWeather };
};

export default getFormattedWeatherData;
