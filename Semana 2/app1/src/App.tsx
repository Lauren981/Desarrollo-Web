import './App.css';
import PersonaComponent from './components/PersonaComponent';

function App() {
  // Arreglo de personas
  const listaPersonas = [
    {
      nombre: 'Ana',
      ocupacion: 'Ingeniera',
      pais: 'España',
    },
    {
      nombre: 'Juan',
      ocupacion: 'Doctor',
      pais: 'México',
    },
    {
      nombre: 'Pedro',
      ocupacion: 'Profesor',
      pais: 'Argentina',
    },
  ];

  return (
    <div className="container">
      <h1>Lista de Personas</h1>
      <div className="card-container">
        {listaPersonas.map((persona, index) => (
          <PersonaComponent
            key={index}
            nombre={persona.nombre}
            ocupacion={persona.ocupacion}
            pais={persona.pais}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
