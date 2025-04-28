import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let saludo: string = 'saludo'; // Declaración de la variable saludo con tipo string

  alert(saludo); // Muestra el saludo en un alert

  // Función para sumar números con tipos explícitos
  function sumaNumeros(a: number, b: number): number {
    alert(a + b); // Muestra la suma en un alert
    return a + b; // Retorna la suma
  }

  return (
    <div>
      <h1>Primera aplicación typescript</h1>
      <h2>Suma es: {sumaNumeros(2, 2)}</h2>
    </div>
  );
}

export default App
