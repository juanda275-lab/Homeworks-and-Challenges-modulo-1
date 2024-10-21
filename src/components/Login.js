// src/components/Login.js
import React, { useState } from 'react';
import { auth } from '../firebaseConfig'; // Importa la configuración de Firebase
import { sendSignInLinkToEmail } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    const actionCodeSettings = {
      url: 'http://localhost:3000/finishSignIn', // Asegúrate de que esta URL sea correcta
      handleCodeInApp: true,
    };

    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem('emailForSignIn', email);
        alert('Se envió un enlace de inicio de sesión a ' + email);
      })
      .catch((error) => {
        console.error('Error al enviar el enlace:', error);
        alert('Error al enviar el enlace: ' + error.message);
      });
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Ingresa tu correo electrónico" 
      />
      <button onClick={handleLogin}>Enviar enlace de inicio de sesión</button>
    </div>
  );
};

export default Login;




