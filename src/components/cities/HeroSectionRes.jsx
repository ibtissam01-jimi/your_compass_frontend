import React, { useState, useEffect } from "react";

const restaurants = [
  {
    image: "images/res1.jpg",
    name: "Le Saveur de Tanger",
    description: "Savourez une cuisine marocaine raffinée au cœur de la ville."
  },
  {
    image: "images/res2.jpg",
    name: "Ocean Breeze",
    description: "Dînez avec vue sur la mer, spécialités de fruits de mer."
  },
  {
    image: "images/res3.jpg",
    name: "Dar Al Maghreb",
    description: "Plats traditionnels marocains dans un cadre authentique."
  },
  {
    image: "images/res4.jpg",
    name: "La Table Française",
    description: "Cuisine française gastronomique dans un cadre chic."
  },
];

const HeroSectionRes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % restaurants.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${restaurants[currentIndex].image})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen px-4 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          {restaurants[currentIndex].name}
        </h1>
        <p className="text-xl text-white max-w-xl">{restaurants[currentIndex].description}</p>

        <div className="absolute bottom-4 flex justify-center gap-2">
          {restaurants.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index ? "w-8 bg-white" : "w-2 bg-white opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSectionRes;
