import React from "react";
import { usarTemas } from "../page";

export default function ListaTemas() {
  const { temas, alternarInteresante } = usarTemas();

  return (
    <div>
      {temas.map((tema) => (
        <div
          key={tema.id}
          className={`topic ${tema.interesante ? "interesante" : ""}`}
        >
          <span>{tema.titulo}</span>
          <button onClick={() => alternarInteresante(tema.id)}>
            {tema.interesante ? "No interesante" : "Interesante"}
          </button>
        </div>
      ))}
    </div>
  );
}