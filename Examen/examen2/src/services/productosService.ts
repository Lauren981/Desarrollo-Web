import path from 'path';

export const getPromedioPorCategoria = async () => {
  try {
    const response = await fetch('/api/productos?groupBy=categoria');
    if (!response.ok) throw new Error('Error al obtener promedio por categoría');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

// Servicio para obtener cantidad de productos por marca
export const getCantidadPorMarca = async () => {
  try {
    const response = await fetch('/api/productos?groupBy=marca');
    if (!response.ok) throw new Error('Error al obtener cantidad por marca');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

const filePath = path.join(process.cwd(), 'src', 'data', 'Product.v6.csv');
