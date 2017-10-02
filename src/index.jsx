import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
import statelessClock from './statelessClock';

statelessClock();

ReactDOM.render(
  <Clock />,
  document.getElementById('stateful-clock-root'),
);
