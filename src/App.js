import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/header/Header";
import Popup from "./Components/Helpers/Popup/Popup";

import getFormattedWeatherData from "./Components/services/weatherService";
import BigLoc from "./Components/WeatherCards/bigLoc/BigLoc";
import BigLocInfo from "./Components/WeatherCards/bigLocInfo/BigLocInfo";
import SearchLocate from "./Components/WeatherCards/SearchLocate/SearchLocate";

//фикс адаптива сайта
//Форматнуть видимость, найти иконки для категорий
//Добавить подбор иконок для погоды

function App() {
  const [query, setQuery] = useState(
    JSON.parse(localStorage.getItem("name")) || { q: "Москва" }
  );

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(query));
    const fetchWeather = async () => {
      getFormattedWeatherData({ q: "Москва", ...query }).then((data) => {
        setWeather(data);
        console.log(data);
      });
    };
    if (weather === undefined || weather === null) {
      getFormattedWeatherData({ q: "Москва" }).then((data) => {
        setWeather(data);
      });
    }
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
