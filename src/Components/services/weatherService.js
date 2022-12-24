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
    main: { temp, temp_min, temp_max, feels_like, humidity, pressure },
    visibility,
    dt,

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

  if (visibility < 50) {
    visibility = "очень плохая - 0 баллов";
  } else if (visibility >= 50 && visibility < 200) {
    visibility = "очень плохая - 1 балл";
  } else if (visibility >= 200 && visibility < 500) {
    visibility = "очень плохая - 2 балла";
  } else if (visibility >= 500 && visibility < 1000) {
    visibility = "плохая - 3 балла";
  } else if (visibility >= 1000 && visibility < 2000) {
    visibility = "очень плохая - 4 балла";
  } else if (visibility >= 2000 && visibility < 4000) {
    visibility = "средняя - 5 баллов";
  } else if (visibility >= 4000 && visibility < 10000) {
    visibility = "средняя - 6 баллов";
  } else if (visibility >= 10000 && visibility < 20000) {
    visibility = "хорошая - 7 баллов";
  } else if (visibility >= 20000 && visibility < 50000) {
    visibility = "очень хорошая - 8 баллов";
  } else if (visibility >= 50000) {
    visibility = "исключительная - 9 баллов";
  }

  pressure = Math.round(pressure * 0.750064);
  // sunrise = new Date(sunrise * 1000);
  // sunset = new Date(sunset * 1000);
  feels_like = Math.round(feels_like);
  temp = Math.round(temp);
  temp_max = Math.round(temp_max);
  temp_min = Math.round(temp_min);
  speed = speed.toFixed(1);

  const hourMin = (d) => {
    let hours = new Date(d * 1000).getHours();
    let minutes = new Date(d * 1000).getMinutes();
    const getZero = (num) => {
      if (num >= 0 && num < 10) {
        return `0${num}`;
      } else {
        return num;
      }
    };
    hours = getZero(hours);
    minutes = getZero(minutes);
    let formatTime = `${hours}:${minutes}`;
    return formatTime;
  };

  sunrise = hourMin(sunrise);
  sunset = hourMin(sunset);
  dt = hourMin(dt);

  // const hours = new Date(dt * 1000).getHours();
  // const minutes = new Date(dt * 1000).getMinutes();

  const { icon, description } = weather[0];

  return {
    dt,
    feels_like,
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
    pressure,
    description,
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
