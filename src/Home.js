import React, { useState } from 'react';
import './Home.css';
import Countdown from './Countdown';

function Home() {
  const [startTime, setStartTime] = useState('');
  const [workdayDuration, setWorkdayDuration] = useState(8.5); // Default to 8.5 hours

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleWorkdayDurationChange = (e) => {
    setWorkdayDuration(parseFloat(e.target.value));
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
          <label>
            Select workday duration:
            <select value={workdayDuration} onChange={handleWorkdayDurationChange}>
              <option value={8.0}>8 hours</option>
              <option value={8.5}>8.5 hours</option>
            </select>
          </label>
        </div>
        {startTime && <Countdown startTime={new Date(startTime)} workdayDuration={workdayDuration} />}
      </header>
    </div>
  );
}

export default Home;
