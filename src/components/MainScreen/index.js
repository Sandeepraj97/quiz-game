import React from 'react';
import QRCodeComponent from '../QRCodeComponent';
import PlayerList from '../PlayerList';
import './index.css';

const MainScreen = ({ players }) => {
  return (
    <div className="main-screen">
      <h1>Welcome to the Quiz Game!</h1>
       <QRCodeComponent />
      <PlayerList players={players} />
    </div>
  );
};

export default MainScreen;
