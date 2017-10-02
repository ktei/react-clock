import React from 'react';
import ReactDOM from 'react-dom';

function Clock({ time }) {
  return (
    <div>
      <h2>Current time: {time}</h2>
    </div>
  );
}

function displayTime() {
  ReactDOM.render(
    <Clock time={new Date().toLocaleTimeString()} />,
    document.getElementById('stateless-clock-root'),
  );
}

export default function statelessClock() {
  setInterval(displayTime, 1000);
}

