import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import CarouselCharts from './components/CarouselCharts/Carouselcharts';
import CO2 from './components/CO2Page/CO2Page'; 
import About from './components/About.js/About';
import NO2 from './components/NO2Page/NO2Page';
import Methane from './components/MethanePage/MethanePage';
import Temperature from './components/TemperaturePage/TemperaturePage';
import Arctic from './components/ArcticPage/ArcticPage';
import { Helmet } from 'react-helmet';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<>
              <Hero />
              <div className="App">
                <CarouselCharts />
              </div>
            </>} />
            <Route path="/CO2page" element={<CO2 />} />
            <Route path="/NO2page" element={<NO2 />} />
            <Route path="/Methanepage" element={<Methane />} />
            <Route path="/Temperaturepage" element={<Temperature />} />
            <Route path="/Arcticpage" element={<Arctic />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <Helmet>
     
     <title>Warmhead One - Home</title>
     
 </Helmet>
 
    </Router>
    
  );
}

export default App;