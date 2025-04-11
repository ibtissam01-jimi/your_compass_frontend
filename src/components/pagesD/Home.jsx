import React from 'react';
import Navbar from '../components/Navbar';
import NavbarSecondary from '../components/NavbarSecondary';
import HeroSection from '../components/HeroSection';
import Description from '../components/Description';
import ImageCarousel from '../components/ImageCarousel'; // Importer le nouveau composant ImageCarousel
import ThingsToDoPlaces from '../components/ThingsToDoPlaces';
import PlacesToStay from '../components/PlacesToStay';
import FoodAndDrink from '../components/FoodAndDrink';
import RentalCars from '../components/RentalCars';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <NavbarSecondary />
      <HeroSection />
      <Description />
      <ImageCarousel /> {/* Place le carrousel d'images sous la description */}
      <ThingsToDoPlaces/>
      <PlacesToStay />
      <FoodAndDrink/>
      <RentalCars/>
      <Footer/>
    </div>
  );
}

export default Home;
