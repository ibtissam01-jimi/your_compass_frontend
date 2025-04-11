import React from 'react';
import { Link } from 'react-router-dom';

// Importation des images
import leMirageImage from '../assets/le-mirage.jpg';
import hiltonImage from '../assets/hilton.jpg';
import nordPinusImage from '../assets/nord-pinus.jpg';

const hotels = [
  {
    nom: 'Le Mirage',
    image: leMirageImage,
    description: 'Hôtel luxueux avec vue sur la mer.',
    evaluation: 5,
  },
  {
    nom: 'Hilton',
    image: hiltonImage,
    description: 'Hôtel moderne en plein centre-ville.',
    evaluation: 5,
  },
  {
    nom: 'Hôtel Nord-Pinus',
    image: nordPinusImage,
    description: 'Hôtel avec une ambiance unique.',
    evaluation: 5,
  },
];

const PlacesToStay = () => (
  <div className="max-w-7xl mx-auto p-5">
    <h4 className="text-xl font-semibold">Place To Stay :</h4>
    <div className="flex flex-wrap justify-center gap-5 mt-5">
      {hotels.map((hotel, index) => (
        <Link key={index} to={`/hotel/${encodeURIComponent(hotel.nom)}`} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:animate-shimmer">
            <img src={hotel.image} alt={hotel.nom} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{hotel.nom}</h3>
              <p className="text-sm text-gray-600 mt-2">{hotel.description}</p>
              <div className="text-yellow-500 text-xl mt-2">
                {'⭐'.repeat(hotel.evaluation)}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
    <div className="text-center mt-6">
      <Link to="/seemore2" className="inline-block px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-700 transition-colors">
        See more
      </Link>
    </div>
  </div>
);

export default PlacesToStay;
