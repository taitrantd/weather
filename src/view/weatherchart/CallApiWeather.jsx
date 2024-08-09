import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { ClockCircleOutlined } from '@ant-design/icons';
import '../weatherchart/chart.css';

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

const CallApiWeatherHourly = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState('21.01223639868195');
  const [longitude, setLongitude] = useState('105.84763884544373');
  const canvasRef = useRef(null);

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await axios.get(`https://api.opensearch.vn/v1/weather/forecast/hourly?latitude=${lat}&longitude=${lon}`);
      const data = response.data.data;

      const now = dayjs();
      let currentTime = now.startOf('hour'); 

      const hoursToFetch = 7; 
      const hours = [];

      for (let i = 0; i < hoursToFetch; i++) {
        const formattedTime = currentTime.format('YYYY-MM-DDTHH:00:00');
        const dataPoint = data.values.find(v => dayjs(v.time).isSame(formattedTime, 'hour'));
        if (dataPoint) hours.push(dataPoint);
        currentTime = currentTime.add(2, 'hour');
      }

      setWeatherData(hours);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  const drawChart = (ctx, width, height, temperatures) => {
    const padding = 30;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    const maxTemp = Math.max(...temperatures);
    const minTemp = Math.min(...temperatures);

    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    ctx.beginPath();
    temperatures.forEach((temp, index) => {
      const x = padding + (chartWidth / (temperatures.length - 1)) * index;
      const y = height - padding - ((temp - minTemp) / (maxTemp - minTemp)) * chartHeight;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    return { chartWidth, chartHeight, padding, maxTemp, minTemp };
  };

  useEffect(() => {
    if (weatherData.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear the canvas
    ctx.clearRect(0, 0, width, height);

    const temperatures = weatherData.map(hourly => (hourly.temperature.temperature_2m || 0).toFixed(1));

    const chartProps = drawChart(ctx, width, height, temperatures);

    // Draw the forecast container based on the chart
    const forecastContainer = document.querySelector('.forecast-container');
    const forecastItems = forecastContainer.children;

    weatherData.forEach((hourly, index) => {
      const x = chartProps.padding + (chartProps.chartWidth / (temperatures.length - 1)) * index;
      const y = height - chartProps.padding - ((temperatures[index] - chartProps.minTemp) / (chartProps.maxTemp - chartProps.minTemp)) * chartProps.chartHeight;

      // Ensure forecast item is within the canvas area
      if (x < 0) x = 0;
      if (x > width) x = width;
      if (y < 0) y = 0;
      if (y > height) y = height;

      const forecastItem = forecastItems[index];
      forecastItem.style.position = 'absolute';
      forecastItem.style.left = `${x - forecastItem.offsetWidth / 2}px`; // Center the item horizontally
      forecastItem.style.top = `${y + 30}px`; // Position below the chart

      // Draw temperature above each point on the chart
      ctx.fillStyle = '#FFFFFF'; // Màu chữ
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.font = '14px Arial';
      ctx.fillText(`${temperatures[index]}°C`, x, y - 10);
    });
  }, [weatherData]);

  if (error) return <div>Đã xảy ra lỗi: {error.message}</div>;
  if (weatherData.length === 0) return <div>Đang tải dữ liệu...</div>;

  return (
    <div className='chart' style={{ position: 'relative', width: '900px', height: '350px' }}>
      <h1 className='tieud1'><ClockCircleOutlined /> 24-hour forecast</h1>

      <canvas ref={canvasRef} width={800} height={200} style={{ border: 'none', backgroundColor: 'transparent' }}></canvas>
  
      <div className="forecast-container" style={{ position: 'relative', top: '-220px', width: '89%' }}>
        {weatherData.map((hourly, index) => (
          <div key={index} className="forecast-item">
            <img className="forecast-icon" src={getWeatherIcon(hourly.weatherCode)} alt="Biểu tượng thời tiết" />
       
            <p className='hour1'>{hourly.wind.windspeed.windspeed_80m || 'N/A'}km/h</p>
            <p className='hour1'>{index === 0 ? 'Now' : dayjs(hourly.time).format('HH:mm')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallApiWeatherHourly;
