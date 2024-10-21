// src/components/FamilyTree.js

class PersonNode {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    // Agregar un hijo al nodo actual
    addChild(childNode) {
      this.children.push(childNode);
    }
  }
  
  class FamilyTree {
    constructor(rootPerson) {
      this.root = new PersonNode(rootPerson);
    }
  
    // Buscar a una persona dentro del árbol por nombre
    findPerson(node, name) {
      if (node.name === name) {
        return node;
      }
  
      for (let child of node.children) {
        const result = this.findPerson(child, name);
        if (result) {
          return result;
        }
      }
  
      return null;
    }
  
    // Agregar una nueva persona como hijo de un padre existente
    addPerson(parentName, childName) {
      const parentNode = this.findPerson(this.root, parentName);
      if (parentNode) {
        const newChild = new PersonNode(childName);
        parentNode.addChild(newChild);
      } else {
        console.log(`Parent ${parentName} not found.`);
      }
    }
  
    // Mostrar el árbol genealógico (recursivo)
    printTree(node = this.root, indent = "") {
      console.log(`${indent}- ${node.name}`);
      for (let child of node.children) {
        this.printTree(child, indent + "  ");
      }
    }
  }
  
  export default FamilyTree;
  