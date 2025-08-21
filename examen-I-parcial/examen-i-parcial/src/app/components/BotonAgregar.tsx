"use client";
import React from "react";

interface BotonAgregarProps {
  onClick?: () => void;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export default function BotonAgregar({ onClick, children, type = "button" }: BotonAgregarProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ background: "#2563eb", color: "#fff", border: "none", borderRadius: 6, fontWeight: "bold", padding: "8px 16px", cursor: "pointer" }}
    >
      {children || "Agregar"}
    </button>
  );
}
