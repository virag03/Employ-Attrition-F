import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the scales and elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AttritionChart = ({ data }) => {
  const chartData = {
    labels: ['JobSatisfaction', 'WorkLifeBalance', 'JobLevel'],
    datasets: [
      {
        label: 'Employee Attributes',
        data: [
          data?.JobSatisfaction || 0,
          data?.WorkLifeBalance || 0,
          data?.JobLevel || 0
        ],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)'
        ],
      },
    ],
  };

  return (
    <div>
      <h3>Employee Profile Data</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default AttritionChart;
