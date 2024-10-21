// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import FinishSignIn from './components/FinishSignIn';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/finishSignIn" element={<FinishSignIn />} />
      </Routes>
    </Router>
  );
};

export default App;







