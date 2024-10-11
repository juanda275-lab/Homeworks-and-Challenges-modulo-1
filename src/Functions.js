import React, { useState } from 'react';

// Función Regular
function checkEvenOrOddRegular(number) {
  return number % 2 === 0 ? 'par' : 'impar';
}

// Función Flecha
const checkEvenOrOddArrow = (number) => {
  return number % 2 === 0 ? 'par' : 'impar';
};

const Functions = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleCheck = () => {
    const number = parseInt(inputValue);
    if (!isNaN(number)) {
      const type = checkEvenOrOddRegular(number); // Usando la función regular
      setResult(`${number} es ${type}`);
      
      // También puedes usar la función flecha si lo deseas:
      // const typeArrow = checkEvenOrOddArrow(number);
      // setResult(`${number} es ${typeArrow}`);
    } else {
      setResult('Por favor, ingresa un número válido.');
    }
  };

  return (
    <div>
      <h2>Chequeador de Números</h2>
      <input 
        type="number" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Ingresa un número"
      />
      <button onClick={handleCheck}>Comprobar</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default Functions;

