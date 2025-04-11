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
  <div className="max-w-screen-xl mx-auto p-5">
    <h4 className="text-2xl font-semibold mb-6 text-center">Food and Drink:</h4>

    <div className="flex flex-wrap justify-center gap-6">
      {foodAndDrinks.map((lieu, index) => (
        <Link
          key={index}
          to={`/food-and-drink/${lieu.nom.replace(/\s+/g, '-').toLowerCase()}`}
          className="transform transition-transform duration-300 hover:scale-105"
        >
          <div className="w-[300px] bg-white rounded-xl shadow-md overflow-hidden text-center hover:animate-pulse">
            <img
              src={lieu.image}
              alt={lieu.nom}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{lieu.nom}</h3>
              <p className="text-gray-600 mt-2">{lieu.description}</p>
              <div className="text-yellow-400 text-xl mt-2">
                {'⭐'.repeat(lieu.evaluation)}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>

    <div className="text-center mt-8">
      <Link
        to="/seemore3"
        className="inline-block bg-blue-600 hover:bg-blue-800 text-white font-medium py-2 px-5 rounded-md transition duration-300"
      >
        See more
      </Link>
    </div>
  </div>
);

export default FoodAndDrink;
