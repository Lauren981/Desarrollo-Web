'use client';

import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import Papa from 'papaparse';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Producto {
  'brand.code': string; // nombre exacto del CSV
  // otras propiedades si quieres
}

interface MarcaCantidad {
  marca: string;
  cantidad: number;
}

const PieChart = () => {
  const [data, setData] = useState<MarcaCantidad[]>([]);

  useEffect(() => {
    fetch('/data/Product_v6.csv')
      .then(res => res.text())
      .then(csvText => {
        const parsed = Papa.parse<Producto>(csvText, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
        });

        const agrupado: Record<string, number> = {};

        parsed.data.forEach(item => {
          if (!item['brand.code']) return;
          agrupado[item['brand.code']] = (agrupado[item['brand.code']] || 0) + 1;
        });

        const cantidades = Object.entries(agrupado).map(([marca, cantidad]) => ({
          marca,
          cantidad,
        }));

        setData(cantidades);
      });
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
