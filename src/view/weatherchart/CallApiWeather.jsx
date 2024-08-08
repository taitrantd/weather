import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { LinePlot, MarkPlot, lineElementClasses, markElementClasses } from '@mui/x-charts/LineChart';
import '../weatherchart/chart.css'; // Đảm bảo đường dẫn này đúng
import dayjs from 'dayjs';

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

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await axios.get(`https://api.opensearch.vn/v1/weather/forecast/hourly?latitude=${lat}&longitude=${lon}`);
      const data = response.data.data;

      const now = dayjs();
      let currentTime = now.startOf('hour'); 

      const hoursToFetch = 6; 
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

  const handleLatitudeChange = (e) => setLatitude(e.target.value);
  const handleLongitudeChange = (e) => setLongitude(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(latitude, longitude);
  };

  if (error) return <div>Đã xảy ra lỗi: {error.message}</div>;
  if (weatherData.length === 0) return <div>Đang tải dữ liệu...</div>;

  const labels = weatherData.map(hourly => {
    return dayjs(hourly.time).format('HH:mm');
  });

  const temperatures = weatherData.map(hourly => hourly.temperature.temperature_2m || 0);

  return (
    <div className='chart'>
      <h1>Dự báo 12 giờ</h1>
      <p>Thời gian hiện tại: {dayjs().format('HH:mm DD/MM/YYYY')}</p> {/* Hiển thị thời gian hiện tại */}
      <div className="line-chart">
        <ChartContainer
          width={800}
          height={200}
          series={[{ type: 'line', data: temperatures }]}
          xAxis={[{ scaleType: 'point', data: labels }]}
          sx={{
            [`& .${lineElementClasses.root}`]: {
              stroke: '#FFFFFF',
              strokeWidth: 2,
            },
            [`& .${markElementClasses.root}`]: {
              stroke: '#FFFFFF',
              scale: '0.6',
              fill: '#fff',
              strokeWidth: 2,
            },
          }}
          disableAxisListener
        >
          <LinePlot />
          <MarkPlot />
        </ChartContainer>
      </div>
      <div className="forecast-container">
        {weatherData.map((hourly, index) => (
          <div key={index} className="forecast-item">
            <img className="forecast-icon" src={getWeatherIcon(hourly.weatherCode)} alt="Biểu tượng thời tiết" />
      
            <p className='tttt'>{hourly.temperature.temperature_2m || 'N/A'}°C</p>
            <p className='tttt'>{hourly.wind.windspeed.windspeed_80m || 'N/A'} km/h</p>
            <p className='tttt'>{dayjs(hourly.time).format('HH:mm')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallApiWeatherHourly;
