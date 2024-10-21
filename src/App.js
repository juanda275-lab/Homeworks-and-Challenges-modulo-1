import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fakeLogin = () => {
    setIsLoggedIn(true);
  };

  const fakeLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Navigate to="/" />}
          />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
          />
        </Routes>
        {!isLoggedIn ? (
          <button onClick={fakeLogin} style={{ backgroundColor: 'red', color: 'white' }}>
            Login
          </button>
        ) : (
          <button onClick={fakeLogout} style={{ backgroundColor: 'red', color: 'white' }}>
            Logout
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;

