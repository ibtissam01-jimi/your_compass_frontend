import React from 'react';
import { FaHotel, FaMapMarkerAlt, FaConciergeBell, FaUtensils, FaCar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavbarSecondary = () => {
  return (
    <nav className="flex justify-center items-center bg-gray-100 py-2 sticky top-0 z-[1000] shadow-md transition-all duration-300 mt-6 hover:bg-gray-200 hover:shadow-lg">
      <div className="flex items-center mr-8 text-[#8B4513] text-lg transition-transform duration-300 hover:scale-110">
        <FaMapMarkerAlt className="mr-2" />
        <span className="location-text">Tangier</span>
      </div>
      <ul className="flex list-none p-0 m-0">
        <li className="mx-4">
          <Link
            to="/hotels"
            className="flex items-center text-[#8B4513] no-underline font-sans text-base transition-all duration-300 hover:text-[#333] hover:-translate-y-1"
          >
            <FaHotel className="mr-2 transition-transform duration-300 group-hover:rotate-12" />
            Hotels
          </Link>
        </li>
        <li className="mx-4">
          <Link
            to="/activities"
            className="flex items-center text-[#8B4513] no-underline font-sans text-base transition-all duration-300 hover:text-[#333] hover:-translate-y-1"
          >
            <FaConciergeBell className="mr-2 transition-transform duration-300 group-hover:rotate-12" />
            Activities
          </Link>
        </li>
        <li className="mx-4">
          <Link
            to="/restaurants"
            className="flex items-center text-[#8B4513] no-underline font-sans text-base transition-all duration-300 hover:text-[#333] hover:-translate-y-1"
          >
            <FaUtensils className="mr-2 transition-transform duration-300 group-hover:rotate-12" />
            Restaurants
          </Link>
        </li>
        <li className="mx-4">
          <Link
            to="/rental-cars"
            className="flex items-center text-[#8B4513] no-underline font-sans text-base transition-all duration-300 hover:text-[#333] hover:-translate-y-1"
          >
            <FaCar className="mr-2 transition-transform duration-300 group-hover:rotate-12" />
            Rental Cars
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarSecondary;
