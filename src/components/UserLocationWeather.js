// src/components/UserLocationWeather.js
import React from 'react';
import './UserLocationWeather.css'; // Import CSS file

const UserLocationWeather = ({ weatherData, tempUnit }) => {
  if (!weatherData) return null;

  const { name, sys, main } = weatherData;

  // Function to convert temperature based on selected unit
  const convertTemperature = (temp) => {
    return tempUnit === 'celsius' ? (temp - 273.15).toFixed(0) + '°C' : ((temp - 273.15) * 9 / 5 + 32).toFixed(0) + '°F';
  };

  return (
    <div className="user-location-weather">
      <h2>{convertTemperature(main.temp)} {name}, {sys.country}</h2>
    </div>
  );
};

export default UserLocationWeather;
