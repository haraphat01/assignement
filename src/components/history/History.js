import React from 'react';
import HistoryNavbar from './HistoryNavbar'
import './history.css';
import ControlledCarousel from './Carousel';


export default function History() {
  return (
    <div>
      <HistoryNavbar />
      <div className=" background1">
        <div className="container">
          <div className="history-div">
            <div className="d-flex">
              <p className="o1">01</p>
              <span className="span1"></span>
              <p className="history-text">HISTORY</p>
            </div>
            <p className="lorel-ipsum-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
              ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus
              est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt
              quam. Cras scelerisque id quam sed dignissim Pellentesque urna
              nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus
              suscipit dignissim tortor nec congue.{' '}
            </p>
          </div>
        </div>
        <div className="carousel-div">
          <div className="images-div container">
            <div className="text-center mt-1 mb-1">
              <ControlledCarousel/>
            </div>
          </div>
        </div>
        <div className="footer-div">
          <div className="container">
            <div className="div text-container">
              {' '}
              <p className="o2-text">02</p>
              <span className="span2"></span>
              <div className="climb-div">
                <p className="climb-text">CLIMB</p>

                <p className="dummy-text">
                  Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
                  gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
                  dignissim tortor nec congue.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
