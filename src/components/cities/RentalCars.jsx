import React from 'react';
import { Link } from 'react-router-dom';

// Importation des images
import toyotaYarisImage from '../assets/yours.jpg';
import mercedesImage from '../assets/CaliRental.jpg';
import renaultDusterImage from '../assets/Kefalonia.jpg';

const rentalCars = [
  {
    nom: 'Toyota Yaris',
    image: toyotaYarisImage,
    description: 'Voiture compacte et économique.',
    evaluation: 4,
  },
  {
    nom: 'Mercedes-Benz E-Class',
    image: mercedesImage,
    description: 'Voiture de luxe avec toutes les options.',
    evaluation: 5,
  },
  {
    nom: 'Renault Duster',
    image: renaultDusterImage,
    description: 'SUV robuste et spacieux.',
    evaluation: 4,
  },
];

const RentalCars = () => (
  <div className="max-w-7xl mx-auto p-5">
    <h4 className="text-xl font-semibold mb-5">Rental Cars:</h4>
    <div className="flex flex-wrap justify-center gap-5">
      {rentalCars.map((car, index) => (
        <Link 
          key={index} 
          to={`/rental-cars/${car.nom.replace(/\s+/g, '-').toLowerCase()}`} 
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
        >
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img src={car.image} alt={car.nom} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{car.nom}</h3>
              <p className="text-sm text-gray-600 mt-2">{car.description}</p>
              <div className="text-yellow-500 text-xl mt-2">
                {'⭐'.repeat(car.evaluation)}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
    <div className="text-center mt-6">
      <Link to="/seemore4" className="inline-block px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-700 transition-colors">
        See more
      </Link>
    </div>
  </div>
);

export default RentalCars;
