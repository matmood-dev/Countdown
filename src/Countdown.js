import React, { useState, useEffect } from 'react';
import './Countdown.css';

function Countdown({ startTime, duration }) {
  const [timeLeft, setTimeLeft] = useState('Calculating...');
  const [endTime, setEndTime] = useState(null);

  useEffect(() => {
    if (startTime) {
      const end = new Date(startTime);
      if (duration === '6') {
        end.setHours(end.getHours() + 6);
      } else if (duration === '8') {
        end.setHours(end.getHours() + 8);
      } else if (duration === '8.5') {
        end.setHours(end.getHours() + 8);
        end.setMinutes(end.getMinutes() + 30);
      }

      setEndTime(end); // Store the real-world end time

      const interval = setInterval(() => {
        const now = new Date();
        const diff = end - now;

        if (diff <= 0) {
          setTimeLeft('Workday is over! 🎉');
          clearInterval(interval);
        } else {
          const hours = Math.floor(diff / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);

          setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [startTime, duration]);

  // Function to format end time as HH:MM AM/PM
  const formatTime = (date) => {
    if (!date) return '';
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  return (
    <div className="countdown">
      <h2>Countdown to End of Workday</h2>
      <p className="time-left">{timeLeft}</p>
      {endTime && <h3 className="end-time">Your workday ends at <strong>{formatTime(endTime)}</strong></h3>}
    </div>
  );
}

export default Countdown;
