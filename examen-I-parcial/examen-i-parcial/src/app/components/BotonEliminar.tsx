"use client";
import React from "react";

interface BotonEliminarProps {
  onClick: () => void;
  children?: React.ReactNode;
}

export default function BotonEliminar({ onClick, children }: BotonEliminarProps) {
  return (
    <button
      onClick={onClick}
      style={{ background: "#f8d7da", color: "#333", border: "none", borderRadius: 6, fontWeight: "bold", padding: "8px 16px", cursor: "pointer" }}
    >
      {children || "Eliminar"}
    </button>
  );
}
