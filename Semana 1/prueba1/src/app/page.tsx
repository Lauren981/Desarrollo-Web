"use client";
import React from "react";
import { usarTrivia } from "../context/TriviaContext";
import { useRouter } from "next/navigation";

const preguntasSimuladas = [
  { idPregunta: "1", DescripcionPregunta: "El sol es una estrella.", opcionRespuesta1: true, opcionRespuesta2: false, respuestaCorrecta: true, puntajePregunta: 1 },
  { idPregunta: "2", DescripcionPregunta: "La capital de Francia es Berlín.", opcionRespuesta1: true, opcionRespuesta2: false, respuestaCorrecta: false, puntajePregunta: 1 },
  { idPregunta: "3", DescripcionPregunta: "El agua hierve a 100°C.", opcionRespuesta1: true, opcionRespuesta2: false, respuestaCorrecta: true, puntajePregunta: 1 },
  { idPregunta: "4", DescripcionPregunta: "La Tierra tiene dos lunas.", opcionRespuesta1: true, opcionRespuesta2: false, respuestaCorrecta: false, puntajePregunta: 1 },
  { idPregunta: "5", DescripcionPregunta: "El océano Pacífico es el más grande del mundo.", opcionRespuesta1: true, opcionRespuesta2: false, respuestaCorrecta: true, puntajePregunta: 1 },
];

export default function Home() {
  const [preguntas, setPreguntas] = React.useState<any[]>([]);
  const [indiceActual, setIndiceActual] = React.useState(0);
  const [seleccion, setSeleccion] = React.useState(null);
  const [feedback, setFeedback] = React.useState("");
  const [respondida, setRespondida] = React.useState(false);
  const router = useRouter();
  const trivia = usarTrivia();

  React.useEffect(function() {
    setPreguntas(preguntasSimuladas);
  }, []);

  function seleccionar(valor: any) {
    trivia.sumarRespondida();
    if (valor === preguntas[indiceActual].respuestaCorrecta) {
      setFeedback("Correcta");
      trivia.sumarPunto(preguntas[indiceActual].puntajePregunta);
    } else {
      setFeedback("Incorrecta");
    }
    setSeleccion(valor);
    setRespondida(true);
  }

  function siguiente() {
    if (indiceActual < preguntas.length - 1) {
      setIndiceActual(indiceActual + 1);
      setSeleccion(null);
      setFeedback("");
      setRespondida(false);
    } else {
      router.push("/results");
    }
  }

  if (preguntas.length === 0) {
    return <div>Cargando...</div>;
  }

  const pregunta = preguntas[indiceActual];

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Pregunta {indiceActual + 1} de {preguntas.length}</h2>
      <p className="mb-6 text-lg">{pregunta.DescripcionPregunta}</p>
      <div className="flex gap-4 mb-6 justify-center">
        <button
          className={`px-4 py-2 rounded border ${seleccion === true ? 'bg-blue-500 text-white' : 'bg-gray-100'} ${respondida ? 'cursor-not-allowed' : ''}`}
          disabled={respondida}
          onClick={function(){seleccionar(true)}}
        >
          Verdadero
        </button>
        <button
          className={`px-4 py-2 rounded border ${seleccion === false ? 'bg-blue-500 text-white' : 'bg-gray-100'} ${respondida ? 'cursor-not-allowed' : ''}`}
          disabled={respondida}
          onClick={function(){seleccionar(false)}}
        >
          Falso
        </button>
      </div>
      {respondida ? <div className="mb-4 text-lg font-semibold">{feedback}</div> : null}
      {respondida ? <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded" onClick={siguiente}>{indiceActual < preguntas.length - 1 ? 'Siguiente' : 'Resultados'}</button> : null}
    </div>
  );
}

