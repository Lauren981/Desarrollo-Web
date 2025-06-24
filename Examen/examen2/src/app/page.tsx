import React, { JSX } from 'react';
import LineChart from './charts/LineChart';
import PieChart from './charts/PieChart';

const HomePage = (): JSX.Element => {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Visualización de Productos</h1>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Promedio de precios por categoría</h2>
        <LineChart />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Cantidad de productos por marca</h2>
        <PieChart />
      </section>
    </main>
  );
};

export default HomePage;

