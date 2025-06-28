import React, { JSX } from 'react';
import LineChart from './charts/LineChart';
import ProductosTable from './charts/LineChart'; // Importa el componente desde el mismo archivo

const HomePage = (): JSX.Element => {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Visualización de Productos</h1>

      <section className="mb-16">
        <LineChart />
      </section>

      <section>
        <ProductosTable />
      </section>
    </main>
  );
};

export default HomePage;

