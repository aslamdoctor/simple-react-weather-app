import { useState } from "react";
import Header from "./components/Header";
import WeatherData from "./components/WeatherData";
import WeatherForm from "./components/WeatherForm";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // clear previous data
    setWeatherData(null);
    setErrorMessage("");
    setIsLoading(true);

    // fetch weather here and do setWeatherData
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => {
        if (res.status === 401) {
          throw Error("Invalid API key");
        } else if (!res.ok) {
          throw Error("City not found");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
        setIsLoading(false);
      })
      .catch((e) => {
        setErrorMessage(e.message);
        setIsLoading(false);
      });
  };

  const handleSetCity = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="weather-app max-w-md bg-slate-100 mx-auto my-10 p-5 rounded-lg shadow-md">
      <Header title="Check your weather" />
      <WeatherForm
        handleSubmit={handleSubmit}
        handleSetCity={handleSetCity}
        city={city}
      />
      {weatherData && <WeatherData data={weatherData} />}
      {isLoading && <div className="text-xl">Loading...</div>}
      {errorMessage && (
        <div className="font-semibold text-red-600">{errorMessage}</div>
      )}
    </div>
  );
}

export default App;
