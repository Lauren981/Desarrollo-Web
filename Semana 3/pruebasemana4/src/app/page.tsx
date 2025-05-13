"use client";
import { useState, createContext, useContext, useEffect, ReactNode } from "react";
import ListaTemas from "./componentes/ListaTemas";
import "../app/globals.css";
import { useRouter } from "next/navigation";
import InteresantesComponent from "./interesante";


const ContextoTemas = createContext<{
  temas: { id: number; titulo: string; interesante: boolean }[];
  alternarInteresante: (id: number) => void;
}>({
  temas: [],
  alternarInteresante: () => {},
});


export function ProveedorTemas({ children }: { children: ReactNode }) {
  const [temas, setTemas] = useState<{ id: number; titulo: string; interesante: boolean }[]>([]);

  useEffect(() => {
    const temasPorDefecto = [
      { id: 1, titulo: "Introducción a JavaScript", interesante: false },
      { id: 2, titulo: "Fundamentos de React", interesante: false },
      { id: 3, titulo: "Estilos con CSS", interesante: false },
      { id: 4, titulo: "Gestión de estado con Redux", interesante: false },
      { id: 5, titulo: "Introducción a TypeScript", interesante: false },
      { id: 6, titulo: "Desarrollo con Next.js", interesante: false },
      { id: 7, titulo: "Consumo de APIs REST", interesante: false },
      { id: 8, titulo: "Autenticación con JWT", interesante: false },
      { id: 9, titulo: "Optimización de rendimiento en React", interesante: false },
      { id: 10, titulo: "Pruebas unitarias con Jest", interesante: false },
    ];
    setTemas(temasPorDefecto);
  }, []);

  const alternarInteresante = (id: number) => {
    setTemas((temasPrevios) =>
      temasPrevios.map((tema) =>
        tema.id === id ? { ...tema, interesante: !tema.interesante } : tema
      )
    );
  };

  return (
    <ContextoTemas.Provider value={{ temas, alternarInteresante }}>
      {children}
    </ContextoTemas.Provider>
  );
}


export function usarTemas() {
  return useContext(ContextoTemas);
}


export default function Inicio() {
  const router = useRouter();

  return (
    <div className="min-h-screen p-8">
      <ListaTemas />
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => router.push("/interesante")}
      >
        Visualizar temas interesantes
      </button>
    </div>
  );
}


export function TemasInteresantes() {
  const { temas } = usarTemas();
  const router = useRouter();

  const temasInteresantes = temas.filter((tema) => tema.interesante);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl mb-4">Pantalla de Temas Interesantes</h1>
      {temasInteresantes.map((tema) => (
        <div key={tema.id} className="topic interesting">
          {tema.titulo}
        </div>
      ))}
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => router.push("/")}
      >
        Volver
      </button>
    </div>
  );
}