// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const FilterCars = () => {
//   const [cars, setCars] = useState([]);
//   const [startIndex, setStartIndex] = useState(0);
//   const itemsPerPage = 3;

//   const handleNext = () => {
//     setStartIndex((prev) => (prev + itemsPerPage) % restaurants.length);
//   };

//   const handlePrev = () => {
//     setStartIndex((prev) => (prev - itemsPerPage + restaurants.length) % restaurants.length);
//   };

//   useEffect(() => {
//     axios.get('http://localhost:8000/api/RentalCars/filtered')
//       .then((response) => {
//         console.log("Voitures récupérées :", response.data);
//         setCars(response.data);
//       })
//       .catch((error) => {
//         console.error("Erreur lors du chargement des voitures :", error);
//       });
//   }, []);

//   const displayedRestaurants = cars.slice(startIndex, startIndex + itemsPerPage);

//   return (
//     <div className="bg-white py-20">
//       <div className="w-full max-w-7xl mx-auto px-6">
//       <h2 className="text-3xl font-bold text-[#0F3556] text-center mb-4">
//         Voitures de Location
//       </h2>

//       <p className="text-lg text-[#7B5E57] mb-14 text-center">
//           Découvrez notre sélection de Location des Voitures filtrés selon vos préférences.
//         </p>

//         <div className="relative">
//           <button
//             onClick={handlePrev}
//             className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-[#0F3556]/90 hover:bg-[#0F3556] border border-[#D7CCC8] shadow-lg w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:rotate-[-10deg]"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>



//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {displayedRestaurants.map((car, index) => (
//               <div key={index} 
//               className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 h-[26rem] w-full">
//                   <img
//                     src={`http://localhost:8000${car.image}`}
//                     alt={car.name}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#0F3556]/80 to-transparent text-white px-5 py-6">
//                     <h3 className="text-xl font-bold">{car.name}</h3>
//                     <p className="text-sm opacity-80">{car.description}</p>
                    
                   
//                     </div>
//                   </div>
            
//             ))}
//           </div>
//           <button
//             onClick={handleNext}
//             className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-[#0F3556]/90 hover:bg-[#0F3556] border border-[#D7CCC8] shadow-lg w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:rotate-[10deg]"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//         <div className="flex justify-center mt-12 space-x-3">
//           {Array.from({ length: Math.ceil(cars.length / itemsPerPage) }).map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setStartIndex(i * itemsPerPage)}
//               className={`w-4 h-4 rounded-full transition-transform duration-300 ${
//                 startIndex === i * itemsPerPage ? 'bg-[#0F3556] scale-125' : 'bg-[#BCAAA4]'
//               }`}
//             />
//           ))}
//         </div>

//         {/* <div className="text-center mt-10">
//           <Link
//             to="/seemore3"
//             className="inline-block px-6 py-3 bg-[#0F3556] text-white text-sm font-medium rounded-full hover:bg-[#F8DDAC] hover:text-[#0F3556] transition-all duration-300"
//           >
//             Voir plus de RentalCarss
//           </Link>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default FilterCars;







import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FilterCars = () => {
  const [cars, setCars] = useState([]);
  const [sortBy, setSortBy] = useState('best');

  useEffect(() => {
    axios.get('http://localhost:8000/api/RentalCars/filtered')
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des voitures :", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-[#0F3556]">{cars.length} Voitures à Louer</h2>
          <div className="flex items-center">
            <span className="text-sm font-medium mr-2">Trier par :</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#0F3556] text-white text-sm px-4 py-2 rounded-lg"
            >
              <option value="best">Best Value</option>
              <option value="top">Top Rated</option>
              <option value="price">Lowest Price</option>
            </select>
          </div>
        </div>

        <div className="space-y-8">
          {cars.map((car, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row">
              <div className="sm:w-1/3">
                <img
                  src={`http://localhost:8000${car.image}`}
                  alt={car.name}
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="p-6 sm:w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#0F3556]">{car.name}</h3>
                  <p className="text-lg text-gray-700 mt-2">{car.description}</p>
                  <p className="text-xs text-gray-500 mt-1">🚗 {car.views} vues</p>
                </div>

                <div className="mt-4">
                  <a
                    href={car.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FFD700] hover:bg-[#FFC107] text-[#0F3556] font-semibold px-4 py-2 rounded-md shadow transition"
                  >
                    Show Website
                  </a>
                  <span className="text-sm text-gray-500 ml-4">
                    Cliquez pour visiter le site de l'agence
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FilterCars;

