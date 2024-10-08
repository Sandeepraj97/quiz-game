import React from 'react';
import './index.css';

const PlayerList = ({ players }) => {
  return (
    <div className="player-list">
      <h2>Players Joined:</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
