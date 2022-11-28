import React from 'react';
import logo from '../../images/logo.png';
import './mountain_footer.css';
export default function MountainFooter() {
  return (
    <div className=" container ">
      <div className="d-flex justify-content-between mt-3">
        <div className="d-flex">
          <img src={logo} alt="logo" className="logo" />
          <div className="div">
            <p className="los2">LOSANGELES</p>
            <p className="mountains2">MOUNTAINS</p>
          </div>
        </div>
       <p className='copyright'>
       COPYRIGHT 2016. ALL RIGHTS RESERVED.
       </p>
      </div>
    </div>
  );
}
