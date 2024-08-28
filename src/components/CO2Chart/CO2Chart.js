import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
import "./CO2Chart.css"

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const CO2Chart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://global-warming.org/api/co2-api');
        const data = response.data.co2;
  
        console.log(data); 
  
        const years = data.map(item => item.year);
        const co2Levels = data.map(item => item.trend);
  
        setChartData({
          labels: years,
          datasets: [
            {
              label: 'CO2 Levels',
              data: co2Levels,
              borderColor: 'rgba(75,192,192,1)',
              backgroundColor: 'rgba(75,192,192,0.2)',
              borderWidth: 1,
            }
          ]
        });
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };
  
    fetchData();
  }, []);
  
  const options = {
    maintainAspectRatio: window.innerWidth < 768 ? true : false,
    responsive: true,
    aspectRatio: window.innerWidth < 480 ? 1 : window.innerWidth < 768 ? 1.5 : 2, 
    scales: {
      x: {
        ticks: {
          color: '#FFFFFF', 
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', 
        },
      },
      y: {
        ticks: {
          color: '#FFFFFF', 
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', 
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#FFFFFF', 
        },
      },
      title: {
        display: true,
        text: 'CO2 Levels Over Time',
        color: '#FFFFFF', 
        font: {
          size: 18, 
        },
      },
    },
  };

  return (
    <div className="chart-container" style={{ width: window.innerWidth < 768 ? '90%' : '50%', margin: '0 auto', height: window.innerWidth < 768 ? '80vh' : '50vh' }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default CO2Chart;