import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <button className="user-device">User Device</button>
      <button className="login">Login</button>
      <button className="vpn"><i className="fas fa-globe"></i> VPN</button>
      <button className="settings"><i className="fas fa-cogs"></i> Settings</button>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" />
        <i className="fas fa-search search-icon"></i>
      </div>
      <button className="connect">Connect</button>
      <button className="exit"><i className="fas fa-times"></i> Exit</button>
    </div>
  );
}

export default App;
