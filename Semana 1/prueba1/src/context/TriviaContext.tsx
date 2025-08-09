"use client";
import React from 'react';

const MiContexto = React.createContext();

function usarTrivia() {
  return React.useContext(MiContexto);
}

function ProveedorTrivia(props) {
  const estado = React.useState(0);
  const estado2 = React.useState(0);

  function sumarPunto(valor) {
    estado[1](estado[0] + valor);
  }
  function sumarRespondida() {
    estado2[1](estado2[0] + 1);
  }
  function reiniciarTrivia() {
    estado[1](0);
    estado2[1](0);
  }

  return React.createElement(
    MiContexto.Provider,
    { value: { puntaje: estado[0], respondidas: estado2[0], sumarPunto, sumarRespondida, reiniciarTrivia } },
    props.children
  );
}

export { usarTrivia, ProveedorTrivia };
