"use client";
import React, { useState } from "react";
import { useAppContext } from "../Context/AppContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { login, usuario } = useAppContext();
  const [nombre, setNombre] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(nombre, clave)) {
      setError("");
      router.push("/presupuesto");
    } else {
      setError("Usuario o clave incorrectos");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <form onSubmit={handleSubmit} style={{ border: "1px solid #333", padding: 32, borderRadius: 8, minWidth: 320, background: "#fff" }}>
        <h3 style={{ textAlign: "center", marginBottom: 24 }}>Mis Gastos /Inicio de Sesion</h3>
        <input
          type="text"
          placeholder="Usuario"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          style={{ width: "100%", marginBottom: 16, padding: 12, borderRadius: 6, border: "1px solid #e0e0e0", background: "#f2f6fa" }}
        />
        <input
          type="password"
          placeholder="Clave"
          value={clave}
          onChange={e => setClave(e.target.value)}
          style={{ width: "100%", marginBottom: 16, padding: 12, borderRadius: 6, border: "1px solid #e0e0e0", background: "#f2f6fa" }}
        />
        {error && <div style={{ color: "red", marginBottom: 12, textAlign: "center" }}>{error}</div>}
        <button type="submit" style={{ width: "100%", padding: 12, background: "#2563eb", color: "#fff", border: "none", borderRadius: 6, fontWeight: "bold", cursor: "pointer" }}>
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
}
