import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, Filler } from 'chart.js';
import './Metanecharts.css'; 


ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, Filler);

const MethaneChart = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Methane Levels Over Time',
        color: '#FFFFFF',
        font: {
          size: 18,
        },
      },
      legend: {
        labels: {
          color: 'aliceblue',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'aliceblue',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      y: {
        ticks: {
          color: 'aliceblue',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://global-warming.org/api/methane-api');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();

        
        console.log('API Response:', result);

        
        const dataArray = result.methane; 
        if (Array.isArray(dataArray)) {
          const labels = dataArray.map(entry => entry.date);
          const values = dataArray.map(entry => parseFloat(entry.average)); 

          setData({
            labels,
            datasets: [
              {
                label: 'Methane Levels',
                data: values,
                borderColor: '#FF5733',
                backgroundColor: 'rgba(255, 87, 51, 0.2)',
                borderWidth: 2,
                fill: true,
              }
            ]
          });
        } else {
          console.error('Expected an array but received:', result.methane);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="methane-chart">
      {loading ? <p className="loading-text">Loading...</p> : <Line data={data} options={options} />}
    </div>
  );
};

export default MethaneChart;