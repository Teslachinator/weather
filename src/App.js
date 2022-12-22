import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/header/Header";

import getFormattedWeatherData from "./Components/services/weatherService";
import BigLoc from "./Components/WeatherCards/bigLoc/BigLoc";
import BigLocInfo from "./Components/WeatherCards/bigLocInfo/BigLocInfo";
import SearchLocate from "./Components/WeatherCards/SearchLocate/SearchLocate";

//Сделать адаптив сайта +
//Форматнуть видимость, найти иконки для категорий
//Добавить подбор иконок для погоды
//Добавить ERR иконку, убрать прогнозы на неделю +
//Добавить на это место быстрый список городов и поиск
//попапы
//доделать кнопку с поиском

function App() {
  const [query, setQuery] = useState({ q: "саранск" });
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
          <section className="mainBlock">
            <BigLoc weather={weather} />
            <SearchLocate setQuery={setQuery} />
            <BigLocInfo weather={weather} />
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
