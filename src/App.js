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
  const [popupActive, setPopupActive] = useState(false);
  const [query, setQuery] = useState(
    JSON.parse(localStorage.getItem("name")) || { q: "Москва" }
  );

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(query));
  }, [query]);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query }).then((data) => {
        setWeather(data);

        console.log(data);
      });
    };

    if (weather === undefined || weather === null) {
      getFormattedWeatherData({ q: "Москва" }).then((data) => {
        setWeather(data);
      });
      <Popup active={popupActive} setActive={setPopupActive}>
        <p>
          К сожалению сервис OpenWeather не дает возможности показывать прогноз
          погоды на несколько дней вперед бесплатно
        </p>
      </Popup>;
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
