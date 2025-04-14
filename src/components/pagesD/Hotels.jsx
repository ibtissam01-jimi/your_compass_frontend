import React from 'react';
import Navbar from "../home/menu";
import Footer from "../home/footer";
// Importation des images
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
import img11 from '../assets/img11.png';
import img12 from '../assets/img12.png';
import img13 from '../assets/img13.png';
import img14 from '../assets/img14.png';
import img15 from '../assets/img15.png';
import img16 from '../assets/img16.png';
import img17 from '../assets/img17.png';
import img18 from '../assets/img18.png';
import img19 from '../assets/img19.png';
import img20 from '../assets/img20.png';
import img21 from '../assets/img21.png';

const hotels = [
  { 
    name: "Grand Mogador Sea View", 
    description: "Hôtel 5 étoiles avec vue sur la mer, spa et piscine extérieure.", 
    address: "10, Avenue Pasteur, Tanger", 
    price: "120€/nuit", 
    rating: 4.5, 
    image: img1
  },
  { 
    name: "Mövenpick Hotel & Casino Malabata", 
    description: "Hôtel de luxe avec casino, piscine et accès direct à la plage.", 
    address: "Route de Malabata, Tanger", 
    price: "150€/nuit", 
    rating: 4.7, 
    image: img2
  },
  { 
    name: "Hilton Tangier Al Houara Resort & Spa", 
    description: "Complexe 5 étoiles avec un immense jardin et centre de bien-être.", 
    address: "Km 19, Route de Ksar Sghir, Tanger", 
    price: "200€/nuit", 
    rating: 4.8, 
    image: img3
  },
  { 
    name: "Ibis Tanger Free Zone", 
    description: "Hôtel économique idéal pour les voyageurs d'affaires.", 
    address: "Zone Franche de Tanger", 
    price: "60€/nuit", 
    rating: 4.0, 
    image: img4
  },
  { 
    name: "El Minzah Hotel", 
    description: "Hôtel historique combinant charme traditionnel et modernité.", 
    address: "85, Rue de la Liberté, Tanger", 
    price: "130€/nuit", 
    rating: 4.6, 
    image: img5
  },
  { 
    name: "Royal Tulip City Center", 
    description: "Hôtel moderne avec spa, piscine et restaurant gastronomique.", 
    address: "Avenue Mohamed VI, Tanger", 
    price: "140€/nuit", 
    rating: 4.5, 
    image: img6
  },
  {
    name: "Marina Bay",
    description: "Hôtel en bord de mer avec piscine extérieure et vue panoramique.",
    address: "152, Avenue Mohamed VI, Tanger",
    price: "110€/nuit",
    rating: 4.4,
    image: img7
  },
  {
    name: "Hotel Farah Tanger",
    description: "Établissement 5 étoiles avec spa, piscines et restaurants variés.",
    address: "Cap Malabata, Route Ksar Sghir, Tanger",
    price: "160€/nuit",
    rating: 4.3,
    image: img8
  },
  {
    name: "Kenzi Solazur",
    description: "Hôtel moderne face à la mer avec centre de bien-être et restaurants.",
    address: "Avenue Mohamed VI, Tanger",
    price: "100€/nuit",
    rating: 4.2,
    image: img9
  },
  {
    name: "Hotel Rembrandt",
    description: "Hôtel historique au cœur de la ville avec jardin et piscine.",
    address: "Boulevard Mohamed V, Tanger",
    price: "70€/nuit",
    rating: 4.1,
    image: img10
  },
  {
    name: "Dar Chams Tanja",
    description: "Maison d'hôtes de luxe dans la médina avec vue sur la baie.",
    address: "2, Rue Jnan Kaptan, Médina, Tanger",
    price: "120€/nuit",
    rating: 4.9,
    image: img11
  },
  {
    name: "La Maison de Tanger",
    description: "Maison d'hôtes avec jardin exotique et piscine au centre-ville.",
    address: "9, Rue Al Mabarra, Tanger",
    price: "90€/nuit",
    rating: 4.8,
    image: img12
  },
  {
    name: "Palais Zahia",
    description: "Riad traditionnel dans la médina avec restaurant et terrasse.",
    address: "59, Rue de la Kasbah, Médina, Tanger",
    price: "80€/nuit",
    rating: 4.7,
    image: img13
  },
  {
    name: "Hotel Continental",
    description: "Hôtel historique avec vue sur le port et décoration marocaine.",
    address: "36, Rue Dar Baroud, Médina, Tanger",
    price: "60€/nuit",
    rating: 4.0,
    image: img14
  },
  {
    name: "Fredj Hotel",
    description: "Hôtel moderne avec piscine sur le toit et vue sur la baie.",
    address: "42, Rue de Hollande, Tanger",
    price: "85€/nuit",
    rating: 4.3,
    image: img15
  },
  {
    name: "Hotel Mamora",
    description: "Établissement confortable dans la médina avec terrasse panoramique.",
    address: "19, Rue Mokhtar Ahardan, Médina, Tanger",
    price: "50€/nuit",
    rating: 4.1,
    image: img16
  },
  {
    name: "Dar Nour",
    description: "Maison d'hôtes artistique dans la kasbah avec vue sur la mer.",
    address: "20, Rue Gourna, Kasbah, Tanger",
    price: "95€/nuit",
    rating: 4.6,
    image: img17
  },
  {
    name: "Hotel Chellah",
    description: "Hôtel au centre-ville avec jardin et piscine extérieure.",
    address: "47-49, Rue Allal Ben Abdellah, Tanger",
    price: "65€/nuit",
    rating: 3.9,
    image: img18
  },
  {
    name: "Hotel Miramar",
    description: "Établissement en bord de mer avec chambres offrant vue sur l'océan.",
    address: "21, Avenue Mohamed VI, Tanger",
    price: "75€/nuit",
    rating: 4.0,
    image: img19
  },
  {
    name: "Dar Sultan",
    description: "Maison d'hôtes de charme dans la kasbah avec décoration traditionnelle.",
    address: "49, Rue Touila La Kasbah, Tanger",
    price: "110€/nuit",
    rating: 4.8,
    image: img20
  },
  {
    name: "Hotel El Oumnia Puerto",
    description: "Hôtel avec piscine, proche de la plage et du centre-ville.",
    address: "10, Avenue Beethoven, Tanger",
    price: "95€/nuit",
    rating: 4.2,
    image: img21
  }
];

const Hotels = () => {
  return ( <> <Navbar/>
    <div className="bg-gray-100 py-10 px-4 sm:px-8 md:px-16">
      <h1 className="text-center text-3xl font-bold text-[#0F3556] mb-12">Hôtels à Tanger</h1>
      <p className="text-center text-lg text-gray-700 mb-12">Découvrez les meilleurs hôtels de Tanger et profitez de ses hébergements uniques et de qualité.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {hotels.map((hotel, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
            <img src={hotel.image} alt={hotel.name} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-[#0F3556] mb-2">{hotel.name}</h2>
              <p className="text-gray-600 text-sm mb-4"><strong>Adresse:</strong> {hotel.address}</p>
              <p className="text-gray-700 text-sm mb-4"><strong>Description:</strong> {hotel.description}</p>
              <p className="text-gray-600 text-sm mb-4"><strong>Prix:</strong> {hotel.price}</p>
              <p className="text-yellow-500 text-sm mb-4 flex items-center">
                ⭐ {hotel.rating} / 5
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
   <Footer/> </>
  );
};







// hadi ila bghina bg tbdl mara bayta mara blru marin , ila ejbatkom 
// akhren nrjeoum bhal hotel ..



// const Hotels = () => {
//   const [backgroundColor, setBackgroundColor] = useState('bg-white');

//   // Change background color every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBackgroundColor(prev => (prev === 'bg-white' ? 'bg-[#0F3556]' : 'bg-white'));
//     }, 3000);
//     return () => clearInterval(interval); // Clean up interval on component unmount
//   }, []);

//   return (
//     <div className={`${backgroundColor} py-10 px-4 sm:px-8 md:px-16 transition-colors duration-150`}>
//       <h1 className="text-center text-3xl font-bold text-white mb-12">Hôtels à Tanger</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {hotels.map((hotel, index) => (
//           <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
//             <img src={hotel.image} alt={hotel.name} className="w-full h-56 object-cover" />
//             <div className="p-6">
//               <h2 className="text-xl font-semibold text-[#0F3556] mb-2">{hotel.name}</h2>
//               <p className="text-gray-600 text-sm mb-4"><strong>Adresse:</strong> {hotel.address}</p>
//               <p className="text-gray-700 text-sm mb-4"><strong>Description:</strong> {hotel.description}</p>
//               <p className="text-gray-600 text-sm mb-4"><strong>Prix:</strong> {hotel.price}</p>
//               <p className="text-yellow-500 text-sm mb-4 flex items-center">
//                 ⭐ {hotel.rating} / 5
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
export default Hotels;