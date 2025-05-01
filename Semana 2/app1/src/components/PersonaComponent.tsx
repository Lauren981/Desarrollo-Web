import React from 'react';

interface PersonaProps {
  nombre: string;
  ocupacion: string;
  pais: string;
}

export default function PersonaComponent({ nombre, ocupacion, pais }: PersonaProps) {
  return (
    <div className="card">
      <h2>{nombre}</h2>
      <p>Ocupación: {ocupacion}</p>
      <p>País: {pais}</p>
    </div>
  );
}