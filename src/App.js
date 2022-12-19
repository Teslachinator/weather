import "./App.css";
import Header from "./Components/header/Header";
import Main from "./Components/main/Main";
import getFormattedWeatherData from "./Components/services/weatherService";

function App() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: "moscow" });
    console.log(data);
  };

  fetchWeather();

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
