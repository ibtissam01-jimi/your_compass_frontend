import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Auth & Forms
import LoginPage from "./components/forms/login";
import SignUp from "./components/forms/signin";
import ResetPassword from "./components/forms/resetPassword";
import BusinessForm from "./components/forms/addBusiness";
import ProfileForm from "./components/forms/addGuides";

// Home & Pages
import HomePage from "./components/pages/homePage";
import AboutPage from "./components/pages/aboutPage";
import ContactPage from "./components/home/contact";
import AdminPage from "./components/pages/adminPage";
import AdminProfile from "./components/admin/AdminProfile";
import Favorites from "./components/home/Favorites";
import Sidebar from "./components/admin/menuAdmin";
import SubmissionsTable from "./components/admin/Submissions";

// Tanger Pages
import HomeD from "./components/pagesD/Home";
import About from "./components/pagesD/About";
import Service from "./components/pagesD/Service";
import Contact from "./components/pagesD/Contact";
import Activities from './components/pagesD/Activities';
import Restaurants from './components/pagesD/Restaurants';
import Hotels from './components/pagesD/Hotels';
import RentalCars from './components/pagesD/RentalCars2';

// City Details & Sections
import SeeMore1 from './components/cities/SeeMore1';
import SeeMore2 from './components/cities/SeeMore2';
import SeeMore3 from './components/cities/SeeMore3';
import SeeMore4 from './components/cities/SeeMore4';
import DetailPlace from './components/cities/DetailPlace';
import DetailsRental from './components/cities/DetailsRental';
import FoodDetails from './components/cities/FoodDetails';
import FoodAndDrink from './components/cities/FoodAndDrink';
import PlacesToStay from './components/cities/PlacesToStay';
import HotelDetails from './components/cities/HotelDetails';
import Cheznous from './components/cities/Cheznous';
import HeroSection2 from './components/cities/HeroSection2';
import HeroSection3 from './components/cities/HeroSection3';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/forget_password" element={<ResetPassword />} />
        <Route path="/signup_login" element={<LoginPage />} />
        <Route path="/create_signup" element={<SignUp />} />

        {/* Forms */}
        <Route path="/AddBuss" element={<BusinessForm />} />
        <Route path="/profileGuide" element={<ProfileForm />} />

        {/* Home Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/your-cancel-destination" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/favorites" element={<Favorites />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/admin-sidebar" element={<Sidebar />} />
        <Route path="/submission" element={<SubmissionsTable />} />

        {/* Tanger Pages */}
        <Route path="/tanger" element={<HomeD />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/rental-cars" element={<RentalCars />} />

        {/* City Details */}
        <Route path="/see-more" element={<SeeMore1 />} />
        <Route path="/seemore2" element={<SeeMore2 />} />
        <Route path="/seemore3" element={<SeeMore3 />} />
        <Route path="/seemore4" element={<SeeMore4 />} />
        <Route path="/food-and-drink" element={<FoodAndDrink />} />
        <Route path="/food-and-drink/:nom" element={<FoodDetails />} />
        <Route path="/details/:nom" element={<DetailPlace />} />
        <Route path="/rental-cars/:nom" element={<DetailsRental />} />
        <Route path="/hotel/:nom" element={<HotelDetails />} />

        {/* Other Components */}
        <Route path="/logo" element={<Cheznous />} />
        <Route path="/Hotel" element={<HeroSection2 />} />
        <Route path="/car-rental" element={<HeroSection3 />} />
      </Routes>
    </Router>
  );
}

export default App;
