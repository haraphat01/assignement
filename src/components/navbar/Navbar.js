import React from 'react';
import '../navbar/navbar.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className=" container  ">
      <div className="d-flex justify-content-between mt-3">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="d-flex ">
         

          <Link to="/history" className="history">
            01 History
          </Link>

          <Link to="/mountain" className="team">
            02 Team
          </Link>
        </div>
      </div>
    </div>
  );
}
