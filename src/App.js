import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/header/Header";
import getFormattedWeatherData from "./Components/services/weatherService";
import MainBlock from "./Components/WeatherBlock/MainBlock";

//Сделать адаптив сайта
//Форматнуть видимость, найти иконки для категорий
//Добавить подбор иконок для погоды
//Добавить ERR иконку, попапы, убрать прогнозы на неделю
//Добавить на это место быстрый список городов и поиск

function App() {
  const [query, setQuery] = useState({ q: "питер" });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query }).then((data) => {
        setWeather(data);
        console.log(data);
      });
    };

    fetchWeather();
  }, [query]);

  return (
    <div className="App">
      {weather && (
        <div>
          <Header />
          <MainBlock weather={weather} />
        </div>
      )}
    </div>
  );
}

export default App;
