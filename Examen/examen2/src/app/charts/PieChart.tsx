'use client';

import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { getCantidadPorMarca } from '@/services/productosService';

Chart.register(ArcElement, Tooltip, Legend);

interface MarcaCantidad {
  marca: string;
  cantidad: number;
}

const PieChart = () => {
  const [data, setData] = useState<MarcaCantidad[]>([]);

  useEffect(() => {
    getCantidadPorMarca().then(setData);
  }, []);

  const chartData = {
    labels: data.map(d => d.marca),
    datasets: [
      {
        label: 'Cantidad',
        data: data.map(d => d.cantidad),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' as const },
    },
  };

  return <Pie data={chartData} options={chartOptions} />;
};

export default PieChart;
