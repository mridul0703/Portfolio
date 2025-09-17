import React, { useEffect, useState } from "react";
import "../App.css";

const HourlyWeather = ({ city, temperatureUnit, WEATHER_API_KEY }) => {
    const [hourlyWeather, setHourlyWeather] = useState([]);
  
    useEffect(() => {
      if (city) {
        fetchHourlyWeather(city, temperatureUnit);
      }
    }, [city, temperatureUnit]);
  
    const fetchHourlyWeather = (city, unit) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&cnt=24&appid=${WEATHER_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          setHourlyWeather(data.list);
        })
        .catch((error) => {
          console.error("Error fetching hourly weather data:", error);
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
      <div className="hrs-wrap">
        <div className="hourly-weather">
          <h2>24-Hour Weather Forecast for {city}</h2>
          <div className="hourly-weather-container">
            {hourlyWeather.map((hour, index) => (
              <div key={index} className="hour">
                <p>{formatDate(hour.dt)}</p>
                <p>
                  {new Date(hour.dt * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <p>
                  {hour.main.temp.toFixed(1)}°
                  {temperatureUnit === "metric" ? "C" : "F"}
                </p>
                <p>{capitalizeFirstLetter(hour.weather[0].description)}</p> {/* Capitalize first letter */}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default HourlyWeather;