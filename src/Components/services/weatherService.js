const API_KEY = "2eea7d396efbb3e83eabd58044d74455";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feel_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feel_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    weather,
    details,
    icon,
    speed,
  };
};

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1,6).map()
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWather);

  const { lat, lon } = formattedCurrentWather;

  const formattedForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,minutely, alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);

  return formattedForecastWeather;
};
export default getFormattedWeatherData;
