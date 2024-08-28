import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart as ChartJS, Title, Tooltip, Legend, Filler } from 'chart.js';
import "./NO2Chart.css"

ChartJS.register(Title, Tooltip, Legend, Filler);

const NO2Chart = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://global-warming.org/api/nitrous-oxide-api');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();

       
        if (result && Array.isArray(result.nitrous)) {
          const dataArray = result.nitrous;

          
          const labels = dataArray.map(entry => entry.date);
          const values = dataArray.map(entry => parseFloat(entry.average));

         
          setData({
            labels,
            datasets: [
              {
                label: 'Nitrous Oxide Levels',
                data: values,
                borderColor: '#00FF00',  
                backgroundColor: 'rgba(0, 255, 0, 0.2)',  
                borderWidth: 2,
                fill: true,
              }
            ]
          });
        } else {
          console.error('Expected an array but received:', result.nitrous);
          setData(null);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData(null);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const options = {
    maintainAspectRatio: false, 
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#FFFFFF'  
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `Value: ${context.raw}`;
          }
        }
      },
      title: {
        display: true,
        text: 'NO2 Levels Over Time',
        color: '#FFFFFF', 
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#FFFFFF'  
        },
        grid: {
          color: '#FFFFFF'  
        }
      },
      y: {
        ticks: {
          color: '#FFFFFF'  
        },
        grid: {
          color: '#FFFFFF'  
        }
      }
    },
    elements: {
      line: {
        tension: 0.1,
      },
      point: {
        radius: 2,
      }
    }
  };
  return (
    <div className="no2-chart">
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        data ? <Line data={data} options={options} /> : <p>No data available</p>
      )}
    </div>
  );
};

export default NO2Chart;