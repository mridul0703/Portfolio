import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import WeatherInfo from './components/WeatherInfo';
import UserLocationWeather from './components/UserLocationWeather';
import axios from 'axios';
import './App.css';

const API_KEY = '1fb9b7430ade9dc72614f3f70d323ea3'; // Replace with your OpenWeather API key

function App() {
  const [userLocationWeather, setUserLocationWeather] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [tempUnit, setTempUnit] = useState('celsius'); // State to hold temperature unit

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchUserLocationWeather(latitude, longitude);
          fetchForecastData(latitude, longitude);
        },
        (error) => {
          console.error('Error fetching user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const fetchUserLocationWeather = async (latitude, longitude) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
      setUserLocationWeather(response.data);
      setCurrentWeather(response.data); // Set initial weather data to user's location
    } catch (error) {
      console.error('Error fetching user location weather data:', error);
    }
  };

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
      setCurrentWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const fetchForecastData = async (latitude, longitude) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
      setForecastData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching forecast data:', error);
    }
  };

  const handleWeatherData = (city) => {
    const { lat, lon } = city;
    fetchWeatherData(lat, lon);
    fetchForecastData(lat, lon);
  };

  const handleTempUnitChange = (unit) => {
    setTempUnit(unit);
  };

  return (
    <div className="App">
      <Navbar initialWeatherData={currentWeather} onCitySelect={handleWeatherData} onTempUnitChange={handleTempUnitChange} />
      <UserLocationWeather weatherData={userLocationWeather} tempUnit={tempUnit} />
      {currentWeather && <WeatherInfo weatherData={currentWeather} forecastData={forecastData} tempUnit={tempUnit} />}
    </div>
  );
}

export default App;
