import React from 'react';
import moment from 'moment-timezone';

import './clock.css';

function padZero(number) {
  if (number < 10) {
    return `0${number}`;
  }
  return `${number}`;
}

export default class Clock extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.updateTime();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    this.timerID = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  render() {
    const { time } = this.state;

    return (
      <div className="jr-clock">
        <div className="jr-clock__date">{time.toDateString()}</div>
        <div className="jr-clock__time">
          <div className="jr-clock__time-square">{padZero(time.getHours())}</div>
          <span className="jr-clock__time-colon">:</span>
          <div className="jr-clock__time-square">{padZero(time.getMinutes())}</div>
          <span className="jr-clock__time-colon">:</span>
          <div className="jr-clock__time-square">{padZero(time.getSeconds())}</div>
        </div>
      </div>
    );
  }
}
