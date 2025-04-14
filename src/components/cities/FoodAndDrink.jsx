import React from 'react';
import { Link } from 'react-router-dom';

// Importation des images
import laVueImage from '../assets/LaVue.jpg';
import cappuchinoImage from '../assets/Cappuchino.jpg';
import saveurDePoissonImage from '../assets/RR-ICE.jpg';

const foodAndDrinks = [
  {
    nom: 'Café Hafa',
    image: laVueImage,
    description: 'Café emblématique avec vue sur la mer.',
    evaluation: 5,
  },
  {
    nom: 'El Morocco Club',
    image: cappuchinoImage,
    description: 'Restaurant chic avec une cuisine raffinée.',
    evaluation: 5,
  },
  {
    nom: 'Restaurant Saveur de Poisson',
    image: saveurDePoissonImage,
    description: 'Cuisine traditionnelle de poissons et fruits de mer.',
    evaluation: 5,
  },
];

const FoodAndDrink = () => (
  <div className="bg-white py-10 px-5">
    <h4 className="text-3xl font-bold text-[#0F3556] text-center mb-10">
      Food and Drink
    </h4>

    <div className="bg-[#F8DDAC] py-10 px-5">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {foodAndDrinks.map((lieu, index) => (
          <Link key={index} to={`/food-and-drink/${lieu.nom.replace(/\s+/g, '-').toLowerCase()}`}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-[#E6ECF2]">
              <div className="relative h-52">
                <img
                  src={lieu.image}
                  alt={lieu.nom}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3556]/40 to-transparent" />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-[#0F3556]">{lieu.nom}</h3>
                <p className="text-[#0F3556] mt-2 text-sm">{lieu.description}</p>
                <div className="text-[#F8DDAC] text-2xl mt-3">
                  {'⭐'.repeat(lieu.evaluation)}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>

    <div className="text-center mt-10">
      <Link
        to="/seemore3"
        className="inline-block px-6 py-3 bg-[#0F3556] text-white text-sm font-medium rounded-full hover:bg-[#F8DDAC] hover:text-[#0F3556] transition-all duration-300"
      >
        Voir plus de restaurants
      </Link>
    </div>
  </div>
);

export default FoodAndDrink;
