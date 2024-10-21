// src/components/FinishSignIn.js
import React, { useEffect } from 'react';
import { auth } from '../firebaseConfig'; // Importa la configuración de Firebase
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';

const FinishSignIn = () => {
  useEffect(() => {
    const email = window.localStorage.getItem('emailForSignIn');

    if (isSignInWithEmailLink(auth, window.location.href)) {
      if (!email) {
        alert('No se encontró la dirección de correo electrónico. Por favor, intenta iniciar sesión de nuevo.');
        return;
      }

      signInWithEmailLink(auth, email, window.location.href)
        .then(() => {
          window.localStorage.removeItem('emailForSignIn');
          alert('Inicio de sesión exitoso');
          window.location.href = '/'; // Cambia esto a la ruta deseada
        })
        .catch((error) => {
          console.error('Error al completar el inicio de sesión:', error);
          alert('Error al completar el inicio de sesión: ' + error.message);
        });
    } else {
      alert('El enlace de inicio de sesión no es válido.');
    }
  }, []);

  return <div>Finalizando el inicio de sesión...</div>;
};

export default FinishSignIn;







