import React, { useState, useEffect } from 'react';
import './Countdown.css';

function Countdown({ startTime }) {
  const [endTime, setEndTime] = useState(null);
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    if (startTime) {
      const end = new Date(startTime);
      end.setHours(end.getHours() + 8);
      end.setMinutes(end.getMinutes() + 30);
      setEndTime(end);

      const interval = setInterval(() => {
        const now = new Date();
        const diff = end - now;
        if (diff <= 0) {
          setTimeLeft('Workday is over!');
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
  }, [startTime]);

  return (
    <div className="countdown">
      <h2>Countdown to End of Workday</h2>
      <p>{timeLeft}</p>
    </div>
  );
}

export default Countdown;
