// src/components/FamilyTreeComponent.js
import React, { useState } from 'react';
import FamilyTree from './FamilyTree';

const FamilyTreeComponent = () => {
  const [tree] = useState(new FamilyTree("Root Person")); // La persona raíz del árbol
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [message, setMessage] = useState('');

  const handleAddPerson = () => {
    if (parentName && childName) {
      tree.addPerson(parentName, childName);
      setMessage(`Added ${childName} as a child of ${parentName}.`);
      setParentName('');
      setChildName('');
    } else {
      setMessage('Please fill in both parent and child names.');
    }
  };

  const handlePrintTree = () => {
    console.clear(); // Limpiar la consola para mostrar el árbol actualizado
    tree.printTree(); // Mostrar el árbol en la consola
  };

  return (
    <div>
      <h1>Family Tree</h1>
      <div>
        <input
          type="text"
          placeholder="Parent Name"
          value={parentName}
          onChange={(e) => setParentName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Child Name"
          value={childName}
          onChange={(e) => setChildName(e.target.value)}
        />
        <button onClick={handleAddPerson}>Add Person</button>
        <button onClick={handlePrintTree}>Print Family Tree</button>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default FamilyTreeComponent;
