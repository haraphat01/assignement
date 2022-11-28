import '../Home/home.css';
import React from 'react';
import Navbar from '../navbar/Navbar';


export default function Home() {
  return (
    <div className="background ">
      <Navbar />
      <div className="container text-wrapper">
        <p className="los">LOSANGELES</p>
        <p className="mountains">MOUNTAINS</p>
      </div>
      
           
          
    </div>
  );
}
