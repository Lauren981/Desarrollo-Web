"use client";
import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav style={{ display: "flex", gap: 16, padding: 16, background: "#f2f6fa", borderBottom: "1px solid #e0e0e0" }}>
      <Link href="/login">Inicio de Sesión</Link>
      <Link href="/presupuesto">Presupuesto Mensual</Link>
      <Link href="/gastos">Registro de Gastos</Link>
    </nav>
  );
}
