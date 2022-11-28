import React from 'react';
import '../history/history.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

export default function HistoryNavbar() {
  return (
    <div className=" container background-color ">
      <div className="d-flex justify-content-between mt-3 ">
        <Link to="/" className="d-flex logo-link">
          <img src={logo} alt="logo" className="logo" />
          <div className="div">
            <p className="los1">LOSANGELES</p>
            <p className="mountains1">MOUNTAINS</p>
          </div>
        </Link>

        <div className="d-flex ">
          <Link to="/" className="history1 link">01 History</Link>

          <Link to="/mountain" className="team1 link">
            02 Team
          </Link>
        </div>
      </div>
    </div>
  );
}
