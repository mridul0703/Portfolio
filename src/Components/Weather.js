import React from 'react';
import "../App.css"

const WeatherComponent = ({ weather, temperatureUnit }) => {
  // Capitalize the first letter of the description
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Extract min and max temperatures
  const minTemperature = weather.main.temp_min;
  const maxTemperature = weather.main.temp_max;

  return (
    <div className="weather-container">
      <h2>{weather.name}</h2>
      <p className="temperature">{weather.main.temp.toFixed(1)} {temperatureUnit === 'metric' ? '°C' : '°F'}</p>
      <p className="description">{capitalizeFirstLetter(weather.weather[0].description)}</p>
      <div className="additional-info">
        <p>Min Temperature: {minTemperature.toFixed(1)} {temperatureUnit === 'metric' ? '°C' : '°F'}</p>
        <p>Max Temperature: {maxTemperature.toFixed(1)} {temperatureUnit === 'metric' ? '°C' : '°F'}</p>
      </div>
    </div>
  );
};

export default WeatherComponent;
