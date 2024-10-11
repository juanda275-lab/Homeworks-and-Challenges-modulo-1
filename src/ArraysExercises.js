import React from 'react';

const ArraysExercises = () => {
  const numbers = [1, 2, 3, 4, 5];

  const doubledNumbers = numbers.map(num => num * 2);
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  const sum = numbers.reduce((acc, num) => acc + num, 0);

  return (
    <div>
      <h2>Ejercicios de Arrays</h2>
      <p>Números originales: {numbers.join(', ')}</p>
      <p>Números duplicados: {doubledNumbers.join(', ')}</p>
      <p>Números pares: {evenNumbers.join(', ')}</p>
      <p>Suma total: {sum}</p>
    </div>
  );
};

export default ArraysExercises;


