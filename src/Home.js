import React, { useState } from 'react';
import './Home.css';
import Countdown from './Countdown';

function Home() {
  const [startTime, setStartTime] = useState('');

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Workday Countdown</h1>
        <p>
          Enter your start time to see how much longer until the end of your workday!
        </p>
        <div className="input-container">
          <label>
            Enter the start time:
            <input type="datetime-local" value={startTime} onChange={handleStartTimeChange} />
          </label>
        </div>
        {startTime && <Countdown startTime={new Date(startTime)} />}
      </header>
    </div>
  );
}

export default Home;
