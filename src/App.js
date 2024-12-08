import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import Tracking from './components/Tracking';
import OrderHistory from './components/OrderHistory';
import './styles.css'; // Import global styles

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/order-history" element={<OrderHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
