import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, Filler } from 'chart.js';
import './Temperaturechart.css';

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, Filler);

const TemperatureChart = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const options = {
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Temperature Levels Over Time',
                color: 'aliceblue',
                font: {
                    size: 18,
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
                const response = await fetch('https://global-warming.org/api/temperature-api');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();

                console.log('API Response:', result);

                const dataArray = result.result;
                if (Array.isArray(dataArray)) {
                    const labels = dataArray.map(entry => entry.time);
                    const values = dataArray.map(entry => parseFloat(entry.station));

                    setData({
                        labels,
                        datasets: [
                            {
                                label: 'Temperature Anomalies',
                                data: values,
                                borderColor: '#FF5733',
                                backgroundColor: 'rgba(255, 87, 51, 0.2)',
                                borderWidth: 2,
                                fill: true,
                            }
                        ]
                    });
                } else {
                    console.error('Expected an array but received:', result.result);
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
        <div className="temperature-chart">
            {loading ? <p className="loading-text">Loading...</p> : <Line data={data} options={options} />}
        </div>
    );
};

export default TemperatureChart;