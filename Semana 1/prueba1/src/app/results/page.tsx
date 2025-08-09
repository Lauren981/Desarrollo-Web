"use client";
import { usarTrivia } from "../../context/TriviaContext";
import { useRouter } from "next/navigation";

export default function PaginaResultados() {
  const trivia: any = usarTrivia();
  const router = useRouter();

  function volverAJugar() {
    trivia.reiniciarTrivia();
    router.push("/");
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Fin del juego</h2>
      <p className="mb-4 text-lg">Puntaje: <span className="font-bold">{trivia.puntaje}</span></p>
      <p className="mb-6">Respondidas: <span className="font-bold">{trivia.respondidas}</span></p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={volverAJugar}
      >
        Jugar otra vez
      </button>
    </div>
  );
}
