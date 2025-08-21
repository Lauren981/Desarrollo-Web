"use client";
import React, { useState, useEffect } from "react";
import { useAppContext } from "../Context/AppContext";
import { useRouter } from "next/navigation";
import BotonAgregar from "../components/BotonAgregar";
import BotonEliminar from "../components/BotonEliminar";
import ListaGastos from "../components/ListaGastos";

interface Gasto {
  idgasto: number;
  monto: number;
  descripcion: string;
  categoria: string;
  fecha: string;
}

export default function GastosPage() {
  const { usuario, presupuesto, categorias, agregarCategoria } = useAppContext();
  const [gastos, setGastos] = useState<Gasto[]>([]);
  const [monto, setMonto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [nuevaCategoria, setNuevaCategoria] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!usuario.autenticado) {
      router.push("/login");
    }
  }, [usuario, router]);

  useEffect(() => {
    fetch("http://localhost:5000/gasto")
      .then(res => res.json())
      .then(data => setGastos(data));
  }, []);

  const handleAgregarGasto = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!monto || !descripcion || !categoria || !fecha) return;
    const gasto = {
      monto: parseFloat(monto),
      descripcion,
      categoria,
      fecha,
    };
    const res = await fetch("http://localhost:5000/gasto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(gasto),
    });
    if (res.ok) {
      fetch("http://localhost:5000/gasto")
        .then(res => res.json())
        .then(data => setGastos(data));
  setMonto("");
  setDescripcion("");
  setCategoria("");
  setFecha("");
    }
  };

  const handleAgregarCategoria = () => {
    if (nuevaCategoria) {
      agregarCategoria(nuevaCategoria);
      setNuevaCategoria("");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <div style={{ border: "1px solid #333", padding: 32, borderRadius: 8, minWidth: 400, background: "#fff" }}>
        <h3 style={{ textAlign: "center", marginBottom: 24 }}>
          Presupuesto Establecido Lps. {presupuesto.toLocaleString("es-HN", { minimumFractionDigits: 2 })}
        </h3>
        <form onSubmit={handleAgregarGasto} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
          <input type="number" placeholder="Monto" value={monto} onChange={e => setMonto(e.target.value)} style={{ padding: 12, borderRadius: 6, border: "1px solid #e0e0e0", background: "#f2f6fa", gridColumn: "1/2" }} />
          <input type="text" placeholder="Descripcion" value={descripcion} onChange={e => setDescripcion(e.target.value)} style={{ padding: 12, borderRadius: 6, border: "1px solid #e0e0e0", background: "#f2f6fa", gridColumn: "2/3" }} />
          <input type="text" placeholder="Categoria" value={categoria} onChange={e => setCategoria(e.target.value)} style={{ padding: 12, borderRadius: 6, border: "1px solid #e0e0e0", background: "#f2f6fa", gridColumn: "1/2" }} />
          <input type="date" value={fecha} onChange={e => setFecha(e.target.value)} style={{ padding: 12, borderRadius: 6, border: "1px solid #e0e0e0", background: "#f2f6fa", gridColumn: "2/3" }} />
          <div style={{ gridColumn: "span 2", marginTop: 8 }}>
            <BotonAgregar type="submit">Guardar Gasto</BotonAgregar>
          </div>
        </form>
        <div style={{ marginBottom: 16 }}>
          <input type="text" placeholder="Nueva categoría" value={nuevaCategoria} onChange={e => setNuevaCategoria(e.target.value)} style={{ padding: 8, borderRadius: 6, border: "1px solid #e0e0e0", background: "#f2f6fa", marginRight: 8 }} />
          <BotonAgregar onClick={handleAgregarCategoria}>Agregar Categoría</BotonAgregar>
        </div>
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
                  <button style={{ background: "#ffe066", border: "none", borderRadius: 4, padding: "4px 8px", cursor: "pointer" }} onClick={async () => {
                    const nuevaDescripcion = prompt('Editar descripción', gasto.descripcion);
                    if (nuevaDescripcion !== null) {
                      await fetch(`http://localhost:5000/gasto/${gasto.idgasto}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ ...gasto, descripcion: nuevaDescripcion }),
                      });
                      fetch('http://localhost:5000/gasto')
                        .then(res => res.json())
                        .then(data => setGastos(data));
                    }
                  }}>Editar</button>
                </td>
                <td>
                  <button style={{ background: "#f8d7da", border: "none", borderRadius: 4, padding: "4px 8px", cursor: "pointer" }} onClick={async () => {
                    await fetch(`http://localhost:5000/gasto/${gasto.idgasto}`, {
                      method: 'DELETE',
                    });
                    fetch('http://localhost:5000/gasto')
                      .then(res => res.json())
                      .then(data => setGastos(data));
                  }}>Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
