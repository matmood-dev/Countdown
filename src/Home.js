import React, { useState } from 'react';
import './Home.css';
import Countdown from './Countdown';

function Home() {
  const [startTime, setStartTime] = useState('');
  const [workdayDuration, setWorkdayDuration] = useState('8'); // Default to 8 hours

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleDurationChange = (e) => {
    setWorkdayDuration(e.target.value);
  };

  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Workday Countdown</h1>
        <p>
          Enter your start time and select your workday duration to see how much longer until the end of your workday!
        </p>
        <div className="input-container">
          <label>
            Enter the start time:
            <input type="datetime-local" value={startTime} onChange={handleStartTimeChange} />
          </label>
        </div>
        <div className="duration-container">
          <label>
            Select workday duration:
            <select value={workdayDuration} onChange={handleDurationChange}>
              <option value="6">6 hours</option>
              <option value="8">8 hours</option>
              <option value="8.5">8 hours 30 minutes</option>
            </select>
          </label>
        </div>
        {startTime && <Countdown startTime={new Date(startTime)} duration={workdayDuration} />}
      </header>
    </div>
  );
}

export default Home;