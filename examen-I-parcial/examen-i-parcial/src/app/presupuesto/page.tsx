"use client";
import React, { useState } from "react";
import { useAppContext } from "../Context/AppContext";
import { useRouter } from "next/navigation";

export default function PresupuestoPage() {
  const { usuario, presupuesto, setPresupuesto } = useAppContext();
  const [valor, setValor] = useState(presupuesto ? presupuesto.toString() : "");
  const [alerta, setAlerta] = useState("");
  const router = useRouter();

  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
    if (!usuario.autenticado) {
      router.push("/login");
    }
  }, [usuario, router]);
  if (!isClient || !usuario.autenticado) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const monto = parseFloat(valor);
    if (!isNaN(monto) && monto > 0) {
      setPresupuesto(monto);
      setAlerta("");
    }
  };

  // Simulación de gasto para mostrar alertas
  const gastoSimulado = presupuesto * 0.81;
  let mensaje = "";
  let color = "";
  if (presupuesto > 0) {
    if (gastoSimulado >= presupuesto) {
      mensaje = "Has superado el límite del presupuesto, debes ajustar gastos";
      color = "#f8d7da";
    } else if (gastoSimulado >= presupuesto * 0.8) {
      mensaje = "Ha alcanzado el 80% del presupuesto";
      color = "#fff3cd";
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <form onSubmit={handleSubmit} style={{ border: "1px solid #333", padding: 32, borderRadius: 8, minWidth: 320, background: "#fff" }}>
        <h3 style={{ textAlign: "center", marginBottom: 24 }}>Establecer Presupuesto Mensual</h3>
        <input
          type="number"
          placeholder="Monto de presupuesto Mensual"
          value={valor}
          onChange={e => setValor(e.target.value)}
          style={{ width: "100%", marginBottom: 16, padding: 12, borderRadius: 6, border: "1px solid #e0e0e0", background: "#f2f6fa" }}
        />
        <button type="submit" style={{ width: "100%", padding: 12, background: "#2563eb", color: "#fff", border: "none", borderRadius: 6, fontWeight: "bold", cursor: "pointer" }}>
          Guardar Presupuesto
        </button>
        {mensaje && (
          <div style={{ background: color, marginTop: 16, padding: 12, borderRadius: 6, textAlign: "center" }}>
            {mensaje}
          </div>
        )}
      </form>
    </div>
  );
}
