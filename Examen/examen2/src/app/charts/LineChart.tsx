'use client';

import React, { useEffect, useState } from 'react';
import { getPromedioPorCategoria } from '@/services/productosService';
import { Producto } from '@/types/producto';

interface CategoriaPromedio {
  categoria: string;
  promedio: number;
}

const LineChart = () => {
  const [data, setData] = useState<CategoriaPromedio[]>([]);

  useEffect(() => {
    getPromedioPorCategoria().then(setData);
  }, []);



  return (
    <div>
      {}
      {JSON.stringify(data)}
    </div>
  );
};

export default LineChart;

