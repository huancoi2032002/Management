import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface LineChartProps {
    data: number[];
    labels: string[];
}

const LineChart: React.FC<LineChartProps> = ({ data, labels }) => {
    const chartRef = React.useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                gradient.addColorStop(0, 'rgba(206, 221, 255, 1)');
                gradient.addColorStop(1, 'rgba(206, 221, 255, 0)');

                const myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: '',
                                data: data,
                                fill: true,
                                backgroundColor: gradient,
                                borderColor: '#5185F7',
                                borderWidth: 2,
                                tension: 0.5,
                                pointRadius: 10,
                                pointBorderColor: 'rgba(255, 255,255, 0)',
                                pointBackgroundColor: 'rgba(255, 255,255, 0)',
                                pointHoverRadius: 8,
                                pointHoverBorderWidth: 1,
                                pointHoverBorderColor: 'rgba(255,255,255,1)',
                                pointHoverBackgroundColor: '#5185F7',
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        scales: {
                            x: {
                                grid: {
                                    display: false,
                                },
                            },
                            y: {
                                beginAtZero: true,
                                max: 6000,
                            },
                        },
                        plugins: {
                            tooltip: {
                                bodyColor: 'white',
                                backgroundColor: '#5185F7', // Màu nền của tooltip
                                titleColor: '#ffffff',       // Màu của tiêu đề (label)
                                borderColor: '#ffffff',      // Màu viền của tooltip
                                borderWidth: 1,              // Độ dày viền
                                padding: 10,                 // Padding bên trong tooltip
                                cornerRadius: 8,             // Bo góc cho tooltip
                                displayColors: false, 
                                yAlign: 'bottom',
                                callbacks: {
                                    label: function (tooltipItem) {
                                        return `${tooltipItem.formattedValue}`; // Chỉ hiển thị dữ liệu
                                    },
                                    title: function () {
                                        return ''; // Không hiển thị tiêu đề
                                    },
                                },
                            },
                        },
                    },
                });

                return () => {
                    myChart.destroy(); 
                };
            }
        }
    }, [data, labels]);

    return <canvas ref={chartRef} width="400" height="200" />;
};

export default LineChart;