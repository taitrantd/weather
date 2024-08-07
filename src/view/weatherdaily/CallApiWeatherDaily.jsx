import '../weatherdaily/daily.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SunFilled, ClockCircleOutlined } from '@ant-design/icons';

const getWeatherIcon = (weatherCode) => {
  switch (weatherCode) {
    case 0:
      return '../image/weather/code-0.svg';
    case 1:
    case 2:
    case 3:
      return '../image/weather/code-1,2,3.svg';
    case 45:
    case 48:
      return '../image/weather/code-45,48.svg';
    case 51:
    case 53:
    case 55:
      return '../image/weather/code-51,53,55.svg';
    case 56:
    case 57:
      return '../image/weather/code-56,57.svg';
    case 61:
    case 63:
      return '../image/weather/code-61,63.svg';
    case 65:
      return '../image/weather/code-65.svg';
    case 66:
    case 67:
      return '../image/weather/code-66,67.svg';
    case 71:
    case 73:
    case 75:
      return '../image/weather/code-71,73,75.svg';
    case 77:
      return '../image/weather/code-77.svg';
    case 80:
    case 81:
    case 82:
      return '../image/weather/code-80,81,82.svg';
    case 85:
    case 86:
      return '../image/weather/code-85,86.svg';
    case 95:
      return '../image/weather/code-95.svg';
    case 96:
    case 99:
      return '../image/weather/code-96,99.svg';
    default:
      return '../image/weather/code-0.svg';
  }
};


const getBackgroundClass = (weatherCode) => {
  switch (weatherCode) {
    case 0:
    case 1:
    case 2:
    case 3:
      return '../image/sunsie.jpg';
      case 45:
    case 48:
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 71:
    case 73:
    case 75:
    case 77:
    case 80: 
    case 81: 
    case 82: 
    case 85:
    case 86:
    case 95:
    case 96:
    case 99:
      return '../image/anhmua.jpg';
    default:
      return 'default';
  }
};

const WeatherForecast = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          'https://api.opensearch.vn/v1/weather/forecast/daily?latitude=21.01223639868195&longitude=105.84763884544373'
        );
        setWeatherData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
      
    };

    fetchWeatherData();

    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleNextDay = () => {
    let url = getBackgroundClass(currentDay.weatherCode);
    let boxElement = document.getElementsByClassName("boxx")[0];
    boxElement.style.background = `url(${url}) no-repeat center center`;
    boxElement.style.backgroundSize = 'cover';
    
    setCurrentDayIndex((prevIndex) => (prevIndex + 1) % weatherData.data.values.length);
  };

  const handlePrevDay = () => {
    let url = getBackgroundClass(currentDay.weatherCode);
    let boxElement = document.getElementsByClassName("boxx")[0];
    boxElement.style.background = `url(${url}) no-repeat center center`;
    boxElement.style.backgroundSize = 'cover';
    

    setCurrentDayIndex((prevIndex) => (prevIndex - 1 + weatherData.data.values.length) % weatherData.data.values.length);
  };

  if (loading) return <div>Đang tải dữ liệu...<br/> </div>;
  if (error) return <div>Đã xảy ra lỗi: {error.message}</div>;
  if (!weatherData) return <div>Không có dữ liệu</div>;

  const dailyValues = weatherData.data.values;
  const currentDay = dailyValues[currentDayIndex];
  const weatherIconSrc = getWeatherIcon(currentDay.weatherCode);

  const today = new Date();
  const isToday = new Date(currentDay.time).toDateString() === today.toDateString();
  const time = isToday ? currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : null;

  const backgroundClass = getBackgroundClass(currentDay.weatherCode);
  let url = getBackgroundClass(currentDay.weatherCode);
  let boxElement = document.getElementsByClassName("boxx")[0];
  boxElement.style.background = `url(${url}) no-repeat center center`;
  boxElement.style.backgroundSize = 'cover';
  
  return (

    <div className="weather-container" >
  
      <div className="header1">
        <button className="nav-button" onClick={handlePrevDay}>
          &lt;
        </button>
        <div className="days-icons">
          {dailyValues.map((day, index) => {
            const date = new Date(day.time);
            const isActive = currentDayIndex === index;

            return (
              <div key={index} className={`day-icon ${isActive ? 'active' : ''}`}>
                <p className="day">{date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()}</p>
                <img src={getWeatherIcon(day.weatherCode)} alt="Weather icon" />
                <p>{day.weatherCode}</p>
              </div>
            );
          })}
        </div>
      
        <button className="nav-button" onClick={handleNextDay}>
          &gt;
        </button>
      </div>
      <div className="current-time">
        {time && <span> <ClockCircleOutlined /> {time} GMT</span>}
      </div>
      
      <div className="conditions">
        <h2>Air Conditions</h2>
        <div className="condition-item">
          <span><i className="fa-solid fa-temperature-three-quarters"></i> Real Feel: <br />{currentDay.apparent_temperature_2m.min}°C</span>
        </div>
        <div className="condition-item">
          <span><i className="fa-solid fa-wind"></i> Wind:<br /> {currentDay.wind.windspeed_10m_max} km/h</span>
        </div>
        <div className="condition-item">
          <span><i className="fa-solid fa-droplet"></i> Chance of rain: <br /> {currentDay.rain.precipitationSum}%</span>
        </div>
        <div className="condition-item">
          <span><SunFilled /> UV Index: <br />{currentDay.sun.uvIndexMax}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
