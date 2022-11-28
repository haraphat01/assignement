import React from 'react';
import './mountain.css';
import MountainNav from './MountainNav';
import MountainFooter from './MountainFooter';
export default function Mountain() {
  return (
    <div>
      <div className="background3">
        <MountainNav />
        <div className="container">
          <div className="info-container">
            <p className="schedule">SCHEDULE</p>
            <div className="schedule-container">
              <div className="d-flex pr-3 schedule-font">
                <p>25 Nov 2016</p>
                <p>Vestibulum viverra </p>
              </div>

              <div className="d-flex schedule-font">
                <p>28 Nov 2016</p>
                <p>Vestibulum viverra </p>
              </div>
              <div className="d-flex schedule-font">
                <p>18 Dec 2016</p>
                <p>Vestibulum viverra </p>
              </div>

              <div className="d-flex schedule-font ">
                <p>7 Jan 2017</p>
                <p>Vestibulum viverra </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-div2">
          <div className="container">
            <MountainFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
