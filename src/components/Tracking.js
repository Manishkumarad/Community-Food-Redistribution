import React from 'react';
import '../Tracking.css';

function Tracking() {
  return (
    <div className="tracking-container">
      <h2>Tracking Your Donation</h2>
      <div className="status-card">
        <h3>Status: In Progress</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: '50%' }}></div>
        </div>
        <p>Donated food is on the way to the recipient.</p>
      </div>
    </div>
  );
}

export default Tracking;
