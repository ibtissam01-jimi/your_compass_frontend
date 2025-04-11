import React from 'react';
import { useParams } from 'react-router-dom';

// Importation des images
import yoursImage from '../assets/yours.jpg';
import caliRentalImage from '../assets/CaliRental.jpg';
import kefaloniaImage from '../assets/Kefalonia.jpg';

const rentalCars = [
  {
    nom: 'Toyota Yaris',
    image: yoursImage,
    description: 'Voiture compacte et économique.',
    evaluation: 4,
    prix: '30€/jour',
    carburant: 'Essence',
    transmission: 'Automatique',
  },
  {
    nom: 'Mercedes-Benz E-Class',
    image: caliRentalImage,
    description: 'Voiture de luxe avec toutes les options.',
    evaluation: 5,
    prix: '80€/jour',
    carburant: 'Diesel',
    transmission: 'Automatique',
  },
  {
    nom: 'Renault Duster',
    image: kefaloniaImage,
    description: 'SUV robuste et spacieux.',
    evaluation: 4,
    prix: '50€/jour',
    carburant: 'Diesel',
    transmission: 'Manuelle',
  },
];

const DetailsRental = () => {
  const { nom } = useParams();
  const car = rentalCars.find(
    (c) => c.nom.replace(/\s+/g, '-').toLowerCase() === nom
  );

  if (!car) {
    return (
      <h2 className="text-center text-2xl text-red-600 font-semibold mt-10">
        Voiture non trouvée !
      </h2>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8 font-sans">
      <h1 className="text-3xl font-bold mb-4 text-center">{car.nom}</h1>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Image */}
        <img
          src={car.image}
          alt={car.nom}
          className="w-full md:w-1/2 rounded-lg object-cover shadow-md"
        />

        {/* Infos */}
        <div className="flex-1 space-y-3">
          <p>
            <span className="font-semibold">Description :</span>{' '}
            {car.description}
          </p>
          <p>
            <span className="font-semibold">Prix :</span> {car.prix}
          </p>
          <p>
            <span className="font-semibold">Carburant :</span> {car.carburant}
          </p>
          <p>
            <span className="font-semibold">Transmission :</span>{' '}
            {car.transmission}
          </p>
          <div className="text-yellow-500 text-lg">
            {'⭐'.repeat(car.evaluation)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsRental;
