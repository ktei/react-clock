import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
import statelessClock from './statelessClock';
import StopWatch from './StopWatch';

statelessClock();

ReactDOM.render(
  <Clock />,
  document.getElementById('stateful-clock-root'),
);

ReactDOM.render(
  <StopWatch />,
  document.getElementById('stopwatch-root'),
);
