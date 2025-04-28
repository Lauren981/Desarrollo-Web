import { useState } from 'react';
import './App.css';

function App() {
  const [temperatura, setTemp] = useState(0);
  const [unit, setUnit] = useState('Celsius');

  const convertirTemperatura = () => {
    if (unit === 'Celsius') {
      return [
        { label: 'Fahrenheit', value: (temperatura * 9) / 5 + 32 },
        { label: 'Kelvin', value: temperatura + 273.15 },
      ];
    } else if (unit === 'Fahrenheit') {
      return [
        { label: 'Celsius', value: ((temperatura - 32) * 5) / 9 },
        { label: 'Kelvin', value: ((temperatura - 32) * 5) / 9 + 273.15 },
      ];
    } else {
      return [
        { label: 'Celsius', value: temperatura - 273.15 },
        { label: 'Fahrenheit', value: ((temperatura - 273.15) * 9) / 5 + 32 },
      ];
    }
  };

  return (
    <div>
      <h1>Conversor de Temperatura</h1>
      <input
        type="number"
        value={temperatura}
        onChange={(e) => setTemp(parseFloat(e.target.value))}
      />
      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Kelvin">Kelvin</option>
      </select>
      <ul>
        {convertirTemperatura().map((conversion, index) => (
          <li key={index}>
            {conversion.label}{conversion.value.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
