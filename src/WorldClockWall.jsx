import React from 'react';

import './world-clock-wall.css';
import WorldClock from './WorldClock';

export default function WorldClockWall() {
  return (
    <div className="jr-wcw container">
      <div className="row">
        <div className="col-sm-6">
          <div className="jr-wcw__city">Sydney</div>
          <WorldClock city="sydney" />
        </div>
        <div className="col-sm-6">
          <div className="jr-wcw__city">Seoul</div>
          <WorldClock city="seoul" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="jr-wcw__city">London</div>
          <WorldClock city="london" />
        </div>
        <div className="col-sm-6">
          <div className="jr-wcw__city">New York</div>
          <WorldClock city="new york" />
        </div>
      </div>
    </div>
  );
}
