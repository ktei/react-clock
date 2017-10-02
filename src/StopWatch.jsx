import React from 'react';

function parseDuration(ms) {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);

  return { seconds, minutes };
}

function padLeft(number) {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
}

export default class StopWatch extends React.Component {
  constructor() {
    super();
    this.state = { duration: 0, isRunning: false };
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  componentWillUnmount() {
    this.handleStop();
  }

  handleStart() {
    this.setState({ duration: 0, isRunning: true });
    this.timerID = setInterval(() => {
      this.setState(prevState => ({ duration: prevState.duration + 1000 }));
    }, 1000);
  }

  handleStop() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
    this.setState({ isRunning: false });
  }

  render() {
    const { seconds, minutes } = parseDuration(this.state.duration);

    return (
      <div>
        <h2>{padLeft(minutes)}:{padLeft(seconds)}</h2>
        <button onClick={this.handleStart} disabled={this.state.isRunning}>Start</button>
        <button onClick={this.handleStop} style={{ marginLeft: 20 }}>Stop</button>
      </div>
    );
  }
}
