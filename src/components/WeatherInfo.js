import React, { useState } from "react";
import "./WeatherInfo.css";

const WeatherInfo = ({ weatherData, forecastData, tempUnit }) => {
  const { name, sys, main, weather, wind, visibility, clouds, coord } = weatherData;
  const [displayMode, setDisplayMode] = useState("today");

  // Function to convert temperature based on selected unit
  const convertTemperature = (temp) => {
    return tempUnit === "celsius"
      ? (temp - 273.15).toFixed(0) + "°C"
      : (((temp - 273.15) * 9) / 5 + 32).toFixed(0) + "°F";
  };

  // Function to capitalize the first letter of a string
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleTodayClick = () => {
    setDisplayMode("today");
  };

  const handle5DaysClick = () => {
    setDisplayMode("5days");
  };

  return (
    <div className="full-weather">
      <div className="weather-info">
        <button
          className={displayMode === "today" ? "active-button" : ""}
          onClick={handleTodayClick}
        >
          Today
        </button>
        <button
          className={displayMode === "5days" ? "active-button" : ""}
          onClick={handle5DaysClick}
        >
          5-days
        </button>

        {displayMode === "today" && (
          <WeatherDetails
            name={name}
            sys={sys}
            main={main}
            weather={weather}
            wind={wind}
            visibility={visibility}
            clouds={clouds}
            coord={coord}
            tempUnit={tempUnit}
            convertTemperature={convertTemperature}
            capitalize={capitalize}
          />
        )}

        {displayMode === "5days" && forecastData && (
          <Forecast
            name={name}
            country={sys.country}
            forecastData={forecastData}
            tempUnit={tempUnit}
            convertTemperature={convertTemperature}
          />
        )}
      </div>
    </div>
  );
};

const Forecast = ({ name, country, forecastData, tempUnit, convertTemperature }) => {
  let groupedForecast = {};

  // Group forecast data by date and time
  forecastData.list.forEach((forecast) => {
    const dateTime = new Date(forecast.dt_txt);
    const date = dateTime.toDateString();
    const time = dateTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    if (!groupedForecast[date]) {
      groupedForecast[date] = {};
    }
    if (!groupedForecast[date][time]) {
      groupedForecast[date][time] = [];
    }
    groupedForecast[date][time].push(forecast);
  });

  return (
    <>
      <div className="weather-top">
        <h1>
          5-Day forecast for {name}, {country}
        </h1>
      </div>
      <div className="forecast">
        {Object.keys(groupedForecast).map((date, index) => (
          <div key={index} className="forecast-day">
            <h3>{new Date(date).toLocaleDateString(undefined, { weekday: "long" })}</h3>
            <div className="forecast-items">
              {Object.keys(groupedForecast[date]).map((time, i) => (
                <div key={i} className="forecast-column">
                  <h4>{time}</h4>
                  {groupedForecast[date][time].map((forecast, j) => (
                    <div key={j} className="forecast-item">
                      <p>{convertTemperature(forecast.main.temp)}</p>
                      <p>{forecast.weather[0].description}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const WeatherDetails = ({
  name,
  sys,
  main,
  weather,
  wind,
  visibility,
  clouds,
  coord,
  tempUnit,
  convertTemperature,
  capitalize,
}) => (
  <>
    <div className="weather-top">
      <h1>Current Weather in {name}, {sys.country}</h1>
    </div>
    <div className="weatherbelow">
      <div className="weather-left">
        <div className="weather-left-row row1">
          <div>
            <h2>{convertTemperature(main.temp)}</h2>
            <p>{capitalize(weather[0].description)}</p>
          </div>
          <div className="weather-icon"></div>
        </div>
        <div className="weather-left-row row2">
          <div>
            <h2>Sunrise</h2>
            <p>{new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
          </div>
          <div>
            <h2>Sunset</h2>
            <p>{new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
          </div>
        </div>
      </div>
      <div className="weather-right">
        <div className="right-rows">
          <h2>Latitude</h2>
          <p>{coord.lat}</p>
        </div>
        <div className="right-rows">
          <h2>Longitude</h2>
          <p>{coord.lon}</p>
        </div>
        <div className="right-rows">
          <h2>Humidity</h2>
          <p>{main.humidity}%</p>
        </div>
        <div className="right-rows">
          <h2>Pressure</h2>
          <p>{main.pressure} hPa</p>
        </div>
        <div className="right-rows">
          <h2>Visibility</h2>
          <p>{visibility} meters</p>
        </div>
        <div className="right-rows">
          <h2>Wind</h2>
          <p>Speed: {wind.speed} m/s</p>
        </div>
        <div className="right-rows">
          <h2>Cloudiness</h2>
          <p>{clouds.all}%</p>
        </div>
      </div>
    </div>
  </>
);

export default WeatherInfo;
