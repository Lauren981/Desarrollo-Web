import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState('')

  // Función para determinar el color del texto
  const getTextColor = () => {
    if (text.length < 10) return 'yellow'
    if (text.length >= 10 && text.length <= 50) return 'green'
    return 'red'
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input
          style={{
            color: getTextColor(),
            width: '100%',
            height: '50px',
            fontSize: '16px',
            padding: '10px', 
          }}
          type="text"
          placeholder="Escribe algo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <h1>
          La cantidad de caracteres es: {text.length}
        </h1>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
