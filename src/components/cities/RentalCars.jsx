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
  <div className="bg-white py-10 px-5">
    <h4 className="text-3xl font-bold text-[#0F3556] text-center mb-10">
      Voitures de Location
    </h4>

    <div className="bg-[#F8DDAC] py-10 px-5">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {rentalCars.map((car, index) => (
          <Link key={index} to={`/rental-cars/${car.nom.replace(/\s+/g, '-').toLowerCase()}`}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-[#E6ECF2]">
              <div className="relative h-52">
                <img
                  src={car.image}
                  alt={car.nom}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3556]/40 to-transparent" />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-[#0F3556]">{car.nom}</h3>
                <p className="text-[#0F3556] mt-2 text-sm">{car.description}</p>
                <div className="text-[#F8DDAC] text-2xl mt-3">
                  {'⭐'.repeat(car.evaluation)}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>

    <div className="text-center mt-10">
      <Link
        to="/seemore4"
        className="inline-block px-6 py-3 bg-[#0F3556] text-white text-sm font-medium rounded-full hover:bg-[#F8DDAC] hover:text-[#0F3556] transition-all duration-300"
      >
        Voir plus de voitures
      </Link>
    </div>
  </div>
);

export default RentalCars;
