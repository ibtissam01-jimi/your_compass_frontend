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
  <div className="bg-white py-10 px-5">
    <h4 className="text-3xl font-bold text-[#0F3556] text-center mb-10">
      Où séjourner à Tanger ?
    </h4>

    <div className="bg-[#F8DDAC] py-10 px-5">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {hotels.map((hotel, index) => (
          <Link key={index} to={`/hotel/${encodeURIComponent(hotel.nom)}`}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-[#E6ECF2]">
              <div className="relative h-52">
                <img
                  src={hotel.image}
                  alt={hotel.nom}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3556]/40 to-transparent" />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-[#0F3556]">{hotel.nom}</h3>
                <p className="text-[#0F3556] mt-2 text-sm">{hotel.description}</p>
                <div className="text-[#F8DDAC] text-2xl mt-3">
                  {'⭐'.repeat(hotel.evaluation)}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>

    <div className="text-center mt-10">
      <Link
        to="/seemore2"
        className="inline-block px-6 py-3 bg-[#0F3556] text-white text-sm font-medium rounded-full hover:bg-[#F8DDAC] hover:text-[#0F3556] transition-all duration-300"
      >
        Voir plus d'hôtels
      </Link>
    </div>
  </div>
);

export default PlacesToStay;
