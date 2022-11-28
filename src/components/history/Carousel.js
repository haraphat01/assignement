import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import hiking_man from '../../images/hiking_man.jpg';
import peak from '../../images/peak.jpg';
import './history.css';

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item>
        <img className="  firstpic " src={hiking_man} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className=" firstpic" src={peak} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className=" firstpic" src={hiking_man} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className=" firstpic" src={peak} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
