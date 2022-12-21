import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/header/Header";
import Main from "./Components/main/Main";
import getFormattedWeatherData from "./Components/services/weatherService";

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
          <Main weather={weather} />
        </div>
      )}
    </div>
  );
}

export default App;
