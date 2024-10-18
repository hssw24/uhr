import React from 'react';
import './Clock.css'; // Importiere die CSS-Datei für das Styling

const Clock = () => {
  return (
    <div className="clock">
      <div className="clock-face">
        {/* Zahlen der Uhr */}
        <div className="number twelve">12</div>
        <div className="number three">3</div>
        <div className="number six">6</div>
        <div className="number nine">9</div>

        {/* Stundenzeiger (8 Uhr) */}
        <div className="hour-hand"></div>
        {/* Minutenzeiger (8:00 Uhr) */}
        <div className="minute-hand"></div>
        {/* Mittelpunkt der Uhr */}
        <div className="center-point"></div>
      </div>
    </div>
  );
};

export default Clock;
