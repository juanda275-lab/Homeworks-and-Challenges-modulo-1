import React, { useState } from 'react';
import './Counter.css'; 

const Counter = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <div className="counter-container">
      <h2 className="counter-title">Contador</h2>
      <span className="counter-value">{counter}</span>
      <div className="button-container">
        <button className="button" onClick={handleSubstract}>Restar</button>
        <button className="button" onClick={handleReset}>Reiniciar</button>
      </div>
    </div>
  );
};

export default Counter;

