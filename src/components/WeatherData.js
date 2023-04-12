const WeatherData = ({ data }) => {
  const { main } = data;
  const weather = data.weather[0];
  const iconUrl = `http://openweathermap.org/img/w/${weather.icon}.png`;
  return (
    <div className="weather-app__data">
      <div className="text-lg mb-3 flex justify-start items-center">
        <img
          src={iconUrl}
          alt=""
          className="mr-3 w-20"
        />
        <div>
          <div className="text-3xl">
            <strong>{main.temp}°C</strong>
          </div>
          <div>{weather.main}</div>
        </div>
      </div>
      <div className="text-xl mb-3 text-blue-600 text-2xl">{data.name}</div>
      <div className="text-md mb-2">
        Feels like: <strong>{main.feels_like}°C</strong>
      </div>
      <div className="text-md mb-2">
        Max: <strong>{main.temp_max}°C</strong>, Min:{" "}
        <strong>{main.temp_min}°C</strong>
      </div>
    </div>
  );
};

export default WeatherData;
