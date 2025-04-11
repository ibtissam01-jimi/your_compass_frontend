import React from 'react';
import { Link } from 'react-router-dom';

// Import images directly
import rmilatImage from '../assets/rmilat.jpg';
import capSpartelImage from '../assets/cap-spartel.jpg';
import grotteHerculeImage from '../assets/grotte-d-hercule.jpg';

const lieux = [
  {
    nom: 'Rmilat',
    image: rmilatImage,
    description: 'Zone boisée pour pique-niquer.',
    evaluation: 5,
  },
  {
    nom: 'Cap Spartel',
    image: capSpartelImage,
    description: 'Endroit pittoresque avec un phare.',
    evaluation: 5,
  },
  {
    nom: 'Grotte d\'Hercule',
    image: grotteHerculeImage,
    description: 'Grotte naturelle avec vue sur la mer.',
    evaluation: 5,
  },
  // Ajoutez d'autres lieux si nécessaire
];

const ThingsToDoPlaces = () => (
  <div className="max-w-7xl mx-auto p-5">
    <h4 className="text-xl font-semibold mb-5">Things To Do Places :</h4>
    {lieux.map((lieu, index) => (
      <div key={index} className="inline-block w-72 shadow-lg rounded-xl overflow-hidden transition-transform duration-300 transform hover:scale-105 mx-5 my-5 bg-white text-center">
        <Link to={{ pathname: `/details/${lieu.nom}`, state: { ...lieu } }}>
          <img src={lieu.image} alt={lieu.nom} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-medium">{lieu.nom}</h3>
            <p className="text-gray-700 mb-2">{lieu.description}</p>
            <div className="text-gold text-xl">{'⭐'.repeat(lieu.evaluation)}</div>
          </div>
        </Link>
      </div>
    ))}
    <Link to="/see-more" className="inline-block mt-5 px-6 py-2 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-700 transition-colors duration-300">
      See more
    </Link>
  </div>
);

export default ThingsToDoPlaces;
