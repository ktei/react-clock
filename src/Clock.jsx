import React from 'react';

export default class Clock extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }

  componentDidMount() {
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    this.setState({ time: new Date() });
  }

  render() {
    return (
      <div>
        <h2>Current time: {this.state.time.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
