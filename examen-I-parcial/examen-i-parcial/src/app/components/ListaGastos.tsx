"use client";
import React from "react";

interface Gasto {
  idgasto: number;
  monto: number;
  descripcion: string;
  categoria: string;
  fecha: string;
}

interface ListaGastosProps {
  gastos: Gasto[];
  onEditar: (id: number) => void;
  onEliminar: (id: number) => void;
}

export default function ListaGastos({ gastos, onEditar, onEliminar }: ListaGastosProps) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 16 }}>
      <thead>
        <tr>
          <th>Monto</th>
          <th>Descripcion</th>
          <th>Categoria</th>
          <th>Fecha</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {gastos.map((gasto, idx) => (
          <tr key={gasto.idgasto + '-' + idx}>
            <td>{gasto.monto}</td>
            <td>{gasto.descripcion}</td>
            <td>{gasto.categoria}</td>
            <td>{gasto.fecha}</td>
            <td>
              <button style={{ background: "#ffe066", border: "none", borderRadius: 4, padding: "4px 8px", cursor: "pointer" }} onClick={() => onEditar(gasto.idgasto)}>Editar</button>
            </td>
            <td>
              <button style={{ background: "#f8d7da", border: "none", borderRadius: 4, padding: "4px 8px", cursor: "pointer" }} onClick={() => onEliminar(gasto.idgasto)}>Borrar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
