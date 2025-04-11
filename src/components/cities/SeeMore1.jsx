import React, { useState } from 'react';

// Importation des images
import headerImage from '../assets/header-image.jpg';
import capSpartelImage from '../assets/cap-spartel.jpg';
import rmilatImage from '../assets/rmilat.jpg';
import grotteImage from '../assets/grotte-d-hercule.jpg';
import kasbahImage from '../assets/kasbah.jpg';
import malabataImage from '../assets/malabata.jpg';
import smallImage1 from '../assets/small-image1.jpg';
import smallImage2 from '../assets/small-image2.jpg';
import smallImage3 from '../assets/small-image3.jpg';

const SeeMore1 = () => {
  const [selectedCategory, setSelectedCategory] = useState('Best Places');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="p-5 bg-gray-100">
      <div className="header-image mb-5">
        <img src={headerImage} alt="Header" className="w-full h-auto" />
      </div>
      
      <div className="small-images-row flex justify-around mb-5">
        {[smallImage1, smallImage2, smallImage3].map((image, index) => (
          <img key={index} src={image} alt={`Small ${index + 1}`} className="w-24 h-auto" />
        ))}
      </div>

      <div className="places-section flex justify-between items-center text-center mb-5">
        <h2 className="m-0">104 Places in Tangier</h2>
        <select 
          className="p-2 text-lg border border-gray-300 rounded-md cursor-pointer ml-5 transition-colors hover:border-blue-500" 
          value={selectedCategory} 
          onChange={handleCategoryChange}
        >
          <option value="Best Places">Best Places</option>
          <option value="Traveler Ranked">Traveler Ranked</option>
          <option value="Distance to City Center">Distance to City Center</option>
        </select>
      </div>

      {/* Cap Spartel Section */}
      <div className="your-component flex items-center bg-gray-100 p-5 mt-5">
        <div className="image-section flex justify-center items-center pr-5 w-1/2">
          <img src={capSpartelImage} alt="Cap Spartel" className="w-full h-auto max-w-xs rounded-lg shadow-md" />
        </div>
        <div className="text-section flex-1 pl-5">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Cap Spartel</h2>
          <p className="text-gray-600 mb-2">678 reviews</p>
          <p className="text-gray-600 mb-2">#1 Best Value of 200 Places In Tangier</p>
          <p className="text-gray-600 mb-4">
            Cap Spartel, located at the northwestern tip of Tangier, is where the Atlantic Ocean meets the Mediterranean Sea. The site offers breathtaking views and is home to an iconic lighthouse. It's a popular spot for scenic walks and enjoying nature's beauty.
          </p>
          <button className="view-on-map p-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors">
            View on map
          </button>
        </div>
      </div>

      {/* Rmilat Section */}
      <div className="your-component flex items-center bg-gray-100 p-5 mt-5">
        <div className="image-section flex justify-center items-center pr-5 w-1/2">
          <img src={rmilatImage} alt="Rmilat" className="w-full h-auto max-w-xs rounded-lg shadow-md" />
        </div>
        <div className="text-section flex-1 pl-5">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Rmilat</h2>
          <p className="text-gray-600 mb-2">234 reviews</p>
          <p className="text-gray-600 mb-2">#2 Best Value of 200 Places In Tangier</p>
          <p className="text-gray-600 mb-4">
            Rmilat is a wooded area ideal for picnics and nature walks. The lush greenery and serene environment make it a perfect getaway from the bustling city life.
          </p>
          <button className="view-on-map p-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors">
            View on map
          </button>
        </div>
      </div>

      {/* Grotte d'Hercule Section */}
      <div className="your-component flex items-center bg-gray-100 p-5 mt-5">
        <div className="image-section flex justify-center items-center pr-5 w-1/2">
          <img src={grotteImage} alt="Grotte d'Hercule" className="w-full h-auto max-w-xs rounded-lg shadow-md" />
        </div>
        <div className="text-section flex-1 pl-5">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Grotte d'Hercule</h2>
          <p className="text-gray-600 mb-2">452 reviews</p>
          <p className="text-gray-600 mb-2">#3 Best Value of 200 Places In Tangier</p>
          <p className="text-gray-600 mb-4">
            Grotte d'Hercule is a natural cave with a view of the sea. It's named after the legendary hero Hercules and offers a unique and mystical experience to visitors.
          </p>
          <button className="view-on-map p-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors">
            View on map
          </button>
        </div>
      </div>

      {/* Kasbah Section */}
      <div className="your-component flex items-center bg-gray-100 p-5 mt-5">
        <div className="image-section flex justify-center items-center pr-5 w-1/2">
          <img src={kasbahImage} alt="Kasbah" className="w-full h-auto max-w-xs rounded-lg shadow-md" />
        </div>
        <div className="text-section flex-1 pl-5">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Kasbah</h2>
          <p className="text-gray-600 mb-2">310 reviews</p>
          <p className="text-gray-600 mb-2">#4 Best Value of 200 Places In Tangier</p>
          <p className="text-gray-600 mb-4">
            The Kasbah is a historic fortress offering a glimpse into Tangier's rich history and architecture. The area is filled with charming streets, beautiful gardens, and historical monuments.
          </p>
          <button className="view-on-map p-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors">
            View on map
          </button>
        </div>
      </div>

      {/* Malabata Section */}
      <div className="your-component flex items-center bg-gray-100 p-5 mt-5">
        <div className="image-section flex justify-center items-center pr-5 w-1/2">
          <img src={malabataImage} alt="Malabata" className="w-full h-auto max-w-xs rounded-lg shadow-md" />
        </div>
        <div className="text-section flex-1 pl-5">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Malabata</h2>
          <p className="text-gray-600 mb-2">189 reviews</p>
          <p className="text-gray-600 mb-2">#5 Best Value of 200 Places In Tangier</p>
          <p className="text-gray-600 mb-4">
            Malabata is a scenic area along the coast, known for its beautiful beaches and vibrant atmosphere. It's a perfect spot for relaxing and enjoying the ocean breeze.
          </p>
          <button className="view-on-map p-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors">
            View on map
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeeMore1;
