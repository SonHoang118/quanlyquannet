import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
    const data = {
        labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
        datasets: [
            {
                label: 'My First dataset',
                data: [140, 120, 70, 150, 190, 140],
                fill: false,
                borderColor: 'rgb(255 119 53)',
                tension: 0.1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Tổng quan doanh thu 6 tháng qua'
            }
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Tháng'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Doanh thu (triệu VNĐ)'
                }
            }
        }
    };

    return <Line data={data} options={options} width={550} height={300}/>;
};

export default LineChart;
