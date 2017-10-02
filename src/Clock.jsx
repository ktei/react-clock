import React from 'react';

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
    return (
      <div>
        <h2>Current time: {this.state.time.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
