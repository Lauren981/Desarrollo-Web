import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let saludo = 'saludo'; // Declaración de la variable saludo

  alert(saludo); // Muestra el saludo en un alert

  // Función para sumar números
  function sumaNumeros(a, b) {
    alert(a + b); // Muestra la suma en un alert
    return a + b; // Retorna la suma
  }

  return (
    <div>
      <h1>Primera Aplicación en React</h1>
      <h2>Suma es: {sumaNumeros(2, 2)}</h2>
    </div>
  )
}

export default App
