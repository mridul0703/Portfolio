import React, { useEffect, useState } from "react";
import "../App.css";

const TenDaysWeather = ({ city, temperatureUnit, WEATHER_API_KEY }) => {
  const [tenDaysWeather, setTenDaysWeather] = useState([]);

  useEffect(() => {
    if (city) {
      fetchTenDaysWeather(city, temperatureUnit);
    }
  }, [city, temperatureUnit]);

  const fetchTenDaysWeather = (city, unit) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&cnt=16&appid=${WEATHER_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTenDaysWeather(data.list.slice(0, 16));
      })
      .catch((error) => {
        console.error("Error fetching ten days weather data:", error);
        // Handle error if needed
      });
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="tendays-wrap">
      <div className="tendays-weather">
        <h2>16-Day Weather Forecast for {city}</h2>
        <div className="tendays-weather-container">
          {tenDaysWeather.map((day, index) => (
            <div key={index} className="tenday">
              <p>{formatDate(day.dt)}</p>
              <p>
                {day.main.temp.toFixed(1)}°
                {temperatureUnit === "metric" ? "C" : "F"}
              </p>
              <p>{capitalizeFirstLetter(day.weather[0].description)}</p> {/* Capitalize first letter */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TenDaysWeather;
