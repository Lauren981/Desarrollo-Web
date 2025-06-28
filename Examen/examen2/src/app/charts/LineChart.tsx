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

  const getTodosLosProductos = async () => {
    try {
      const response = await fetch('/api/productos');
      if (!response.ok) throw new Error('Error al obtener productos');
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  };

  function agruparPorPromedio(data: Producto[], campo: 'category.code') {
    console.log('Primeros productos recibidos:', data.slice(0, 5));
    const filtrados = data.filter(
      p =>
        typeof p[campo] === 'string' &&
        p[campo].trim() !== '' &&
        typeof p.value === 'number' &&
        !isNaN(p.value)
    );
    console.log('Productos válidos para promedio:', filtrados.length);

    const agrupado: Record<string, { total: number; count: number }> = {};
    filtrados.forEach(p => {
      if (!agrupado[p[campo]]) agrupado[p[campo]] = { total: 0, count: 0 };
      agrupado[p[campo]].total += p.value;
      agrupado[p[campo]].count += 1;
    });

    return Object.entries(agrupado).map(([categoria, datos]) => ({
      categoria,
      promedio: datos.total / datos.count,
    }));
  }

  return (
    <div>
      {}
      {JSON.stringify(data)}
    </div>
  );
};

// Nuevo componente para mostrar todos los productos
const ProductosTable = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('/api/productos')
      .then(res => res.json())
      .then(setProductos);
  }, []);

  return (
    <div>
      <h2>Todos los productos</h2>
      <pre style={{ maxHeight: 400, overflow: 'auto', background: '#eee', padding: 8 }}>
        {JSON.stringify(productos, null, 2)}
      </pre>
    </div>
  );
};

export default LineChart;

