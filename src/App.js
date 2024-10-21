// src/App.js
import React from 'react';
import FamilyTreeComponent from './components/FamilyTreeComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Family Tree Project</h1>
      </header>
      <main>
        <FamilyTreeComponent />
      </main>
    </div>
  );
}

export default App;
