import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './index.css';

const QRCodeComponent = () => {
  return (
    <div className="qrcode-container">
      <QRCodeSVG value={window.location.href} />
    </div>
  );
};

export default QRCodeComponent;
