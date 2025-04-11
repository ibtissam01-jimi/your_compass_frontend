import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Service = () => {
  return (
    <div className="service">
      <Navbar />
      <div className="content">
        <h1>Our Services</h1>
        <p>Details about the services you offer.</p>
      </div>
      <Footer />
    </div>
  );
}

export default Service;
