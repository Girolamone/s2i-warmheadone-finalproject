import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import "./ArcticChart.css"
// Registrare i componenti di Chart.js
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

function ArcticChart() {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://global-warming.org/api/arctic-api');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Dati API ricevuti:', data);

        if (data && data.arcticData && data.arcticData.data) {
          const arcticData = data.arcticData.data;
          const labels = Object.keys(arcticData).map(key => `${key.slice(0, 4)}-${key.slice(4)}`); // Formattare la data
          const values = Object.values(arcticData).map(item => item.value);

          setChartData({
            labels: labels,
            datasets: [
              {
                label: 'Global Sea Ice Extent (Million Square Km)',
                data: values,
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
              },
            ],
          });
        } else {
          setError('Dati non disponibili o malformati');
        }
      } catch (error) {
        console.error('Errore nel fetch dei dati:', error);
        setError('Errore nel fetch dei dati');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="arctic-chart">
      {chartData.labels && chartData.datasets ? (
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false, 
            plugins: {
              title: {
                display: true,
                text: 'Global Sea Ice Extent Over Time', 
                color: 'aliceblue',
                font: {
                  size: 18,
                  weight: 'bold',
                },
                padding: {
                  bottom: 20,
                },
              },
              legend: {
                labels: {
                  color: 'aliceblue',
                },
              },
              tooltip: {
                callbacks: {
                  title: (tooltipItems) => {
                    return tooltipItems[0].label;
                  },
                  label: (tooltipItem) => {
                    return `Value: ${tooltipItem.raw}`;
                  },
                },
              },
            },
            scales: {
              x: {
                ticks: {
                  color: 'aliceblue',
                },
                grid: {
                  color: 'rgba(255,255,255,0.1)',
                },
              },
              y: {
                ticks: {
                  color: 'aliceblue',
                },
                grid: {
                  color: 'rgba(255,255,255,0.1)',
                },
              },
            },
          }}
        />
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default ArcticChart;