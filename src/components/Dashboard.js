import React from 'react';
import '../Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <section className="hero">
        <h1>Welcome to the Community Food Redistribution</h1>
        <p>Join the movement of helping those in need with food donations.</p>
        <button className="cta-btn">Get Started</button>
      </section>

      <section className="cards">
        <div className="card">
          <h3>Donate Food</h3>
          <p>Help others by donating food to those in need.</p>
          <button className="btn">Donate Now</button>
        </div>
        <div className="card">
          <h3>Track Delivery</h3>
          <p>Follow the status of your food donations.</p>
          <button className="btn">Track Now</button>
        </div>
        <div className="card">
          <h3>Order History</h3>
          <p>Check your past donations and deliveries.</p>
          <button className="btn">View History</button>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
