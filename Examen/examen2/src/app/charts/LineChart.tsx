'use client';

import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

interface Producto {
  'category.code': string;
  value: number;
}

interface CategoriaPromedio {
  categoria: string;
  promedio: number;
}

const LineChart = () => {
  const [data, setData] = useState<CategoriaPromedio[]>([]);

  useEffect(() => {
    fetch('/data/Product_v6.csv')
      .then(res => res.text())
      .then(csvText => {
        const parsed = Papa.parse<Producto>(csvText, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
        });

        const agrupado: Record<string, { suma: number; cantidad: number }> = {};

        parsed.data.forEach((item) => {
          if (!item['category.code'] || !item.value) return;
          if (!agrupado[item['category.code']]) {
            agrupado[item['category.code']] = { suma: 0, cantidad: 0 };
          }
          agrupado[item['category.code']].suma += item.value;
          agrupado[item['category.code']].cantidad += 1;
        });

        const promedios = Object.entries(agrupado).map(([categoria, val]) => ({
          categoria,
          promedio: val.suma / val.cantidad,
        }));

        setData(promedios);
      });
  }, []);

  // Aquí usarías `data` para el gráfico, por ejemplo con react-chartjs-2

  return (
    <div>
      {/* Aquí tu gráfico con data */}
      {JSON.stringify(data)}
    </div>
  );
};

export default LineChart;

