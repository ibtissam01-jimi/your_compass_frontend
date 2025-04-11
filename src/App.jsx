import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/forms/login";
import HomePage from "./components/pages/homePage";
import BusinessForm from "./components/forms/addBusiness";


import Home from './components/pages/homePage';
import About from './components/pages/aboutPage';
import Service from './components/pagesD/Service';
import Contact from './components/pagesD/Contact';
import SeeMore1 from './components/cities/SeeMore1';
import SeeMore2 from './components/cities/SeeMore1'; // Assurez-vous que le chemin est correct
import SeeMore3 from './components/cities/SeeMore1'; // Assurez-vous que le chemin est correct
import SeeMore4 from './components/cities/SeeMore1';
import DetailPlace from './components/DetailPlace';
import DetailsRental from './components/cities/DetailsRental';
import FoodDetails from './components/cities/FoodDetails';
import FoodAndDrink from './components/cities/FoodAndDrink';
import PlacesToStay from './components/cities/PlacesToStay';
import HotelDetails from './components/cities/HotelDetails';
import Hotels from './components/pagesD/Hotels';
import Activities from './components/';
import Restaurants from './pages/Restaurants';
import RentalCars from './pages/RentalCars2';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/AddBuss" element={<BusinessForm />} />

        <Route path="/logo" element={<Cheznous />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/see-more" element={<SeeMore1 />} />
        <Route path="/seemore2" element={<SeeMore2 />} />
        <Route path="/seemore3" element={<SeeMore3 />} />
        <Route path="/seemore3" element={<SeeMore3 />} />
        <Route path="/seemore4" element={<SeeMore4 />} />
        <Route path="/details/:nom" element={<DetailPlace />} />
        <Route path="/rental-cars/:nom" element={<DetailsRental />} />
        <Route path="/food-and-drink" element={<FoodAndDrink />} />
        <Route path="/food-and-drink/:nom" element={<FoodDetails />} />
        <Route path="/" element={<PlacesToStay />} />
        <Route path="/hotel/:nom" element={<HotelDetails />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/rental-cars" element={<RentalCars />} />
      </Routes>
    </Router >
  );
}

export default App;


