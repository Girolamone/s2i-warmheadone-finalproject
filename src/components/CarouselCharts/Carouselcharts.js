import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CO2Chart from '../CO2Chart/CO2Chart';
import MethaneChart from '../MethaneChart/Metanecharts';
import NitrousOxideChart from '../NO2Chart/NO2Chart';
import TemperatureChart from '../TemperatureChart/Temperaturechart';
import ArcticChart from '../ArcticChart/ArcticChart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carouselcharts.css'; 
function CarouselCharts() {
  return (
    <Carousel fade>
      <Carousel.Item className="carousel-item">
        <div className="carousel-content">
          <TemperatureChart />
        </div>
        <Carousel.Caption className="carousel-caption">
          <h3>Temperature Chart</h3>
          <p>Overview of Temperature levels over time.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
        <div className="carousel-content">
          <ArcticChart />
        </div>
        <Carousel.Caption className="carousel-caption">
          <h3>Global Sea Ice Extent Chart</h3>
          <p>Overview of Global Sea Ice Extent levels over time.</p>
        </Carousel.Caption>
        </Carousel.Item>  
      <Carousel.Item className="carousel-item">
        <div className="carousel-content">
          <CO2Chart />
        </div>
        <Carousel.Caption className="carousel-caption">
          <h3>CO2 Chart</h3>
          <p>Overview of CO2 levels over time.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <div className="carousel-content">
          <MethaneChart />
        </div>
        <Carousel.Caption className="carousel-caption">
          <h3>Methane Chart</h3>
          <p>Overview of Methane levels over time.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <div className="carousel-content">
          <NitrousOxideChart />
        </div>
        <Carousel.Caption className="carousel-caption">
          <h3>NO2 Chart</h3>
          <p>Overview of Nitrous Oxide levels over time.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCharts;

