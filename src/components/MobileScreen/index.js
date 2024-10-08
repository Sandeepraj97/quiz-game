import React, { useState } from 'react';
import './index.css';

const MobileScreen = ({ onJoin }) => {
  const [playerName, setPlayerName] = useState('');

  const handleJoin = () => {
    if (playerName) {
      onJoin(playerName);
      setPlayerName('');
    }
  };

  return (
    <div className="mobile-screen">
      <input
        type="text"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleJoin}>Join Game</button>
    </div>
  );
};

export default MobileScreen;
