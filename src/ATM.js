// src/components/ATM.js
import React, { useState } from 'react';
import ATMQueue from './ATMQueue';

const ATM = () => {
  const [queue] = useState(new ATMQueue());
  const [personName, setPersonName] = useState('');
  const [amount, setAmount] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [currentPerson, setCurrentPerson] = useState(null);
  const [message, setMessage] = useState('');

  const handleAddPerson = () => {
    if (personName && amount && arrivalTime) {
      const person = { name: personName, amount, arrivalTime };
      queue.enqueue(person);
      setMessage(`${personName} has been added to the queue.`);
      setPersonName('');
      setAmount('');
      setArrivalTime('');
    } else {
      setMessage('Please fill in all fields.');
    }
  };

  const handleNextPerson = () => {
    const nextPerson = queue.dequeue();
    if (nextPerson) {
      setCurrentPerson(nextPerson);
      setMessage(`${nextPerson.name} is being attended.`);
    } else {
      setMessage('No more people in the queue.');
    }
  };

  return (
    <div>
      <h1>ATM Queue</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={personName}
          onChange={(e) => setPersonName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="time"
          value={arrivalTime}
          onChange={(e) => setArrivalTime(e.target.value)}
        />
        <button onClick={handleAddPerson}>Add Person</button>
      </div>
      <button onClick={handleNextPerson}>Attend Next Person</button>
      <div>
        {currentPerson && (
          <div>
            <h2>Currently Attending:</h2>
            <p>Name: {currentPerson.name}</p>
            <p>Amount: {currentPerson.amount}</p>
            <p>Arrival Time: {currentPerson.arrivalTime}</p>
          </div>
        )}
      </div>
      <p>{message}</p>
    </div>
  );
};

export default ATM;
