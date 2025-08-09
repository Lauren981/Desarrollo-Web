
"use client";
import React from "react";
import { usarTrivia } from "../context/TriviaContext";

function PuntajeHeader() {
  const trivia = usarTrivia();
  return React.createElement(
    "header",
    { className: "max-w-xl mx-auto p-4 bg-white rounded shadow text-center mt-4 mb-2" },
    React.createElement(
      "span",
      { className: "font-bold text-lg" },
      "Puntaje: " + trivia.puntaje
    )
  );
}

export default PuntajeHeader;
