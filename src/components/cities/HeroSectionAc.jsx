import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "images/Act1.jpg",
    title: "Welcome to Tangier",
    description: "Discover the vibrant soul of Tangier, where cultures meet — with Your Compass.",
  },
  {
    image: "images/Act2.jpg",
    title: "Welcome to Tangier",
    description: "Let Your Compass guide you through Tangier's winding medinas and seaside charm",
  },
  {
    image: "images/Act3.jpg",
    title: "Welcome to Tangier",
    description: "Experience the mystique of Tangier, Morocco's doorway to the world, with Your Compass.",
  },
  {
    image: "images/Act4.jpg",
    title: "Welcome to Tangier",
    description: "From the Kasbah to the coast, explore Tangier's hidden gems with Your Compass",
  },
  {
    image: "images/Act5.jpg",
    title: "Welcome to Tangier",
    description: "From the Kasbah to the coast, explore Tangier's hidden gems with Your Compass",
  },
  {
    image: "images/Act6.jpg",
    title: "Welcome to Tangier",
    description: "From the Kasbah to the coast, explore Tangier's hidden gems with Your Compass",
  },
  {
    image: "images/Act7.jpg",
    title: "Welcome to Tangier",
    description: "From the Kasbah to the coast, explore Tangier's hidden gems with Your Compass",
  },
  {
    image: "images/Act8.jpg",
    title: "Welcome to Tangier",
    description: "From the Kasbah to the coast, explore Tangier's hidden gems with Your Compass",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
    
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen px-4">
        {/* Titre et description du carrousel */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">{slides[currentIndex].title}</h1>
          <p className="text-xl text-white">{slides[currentIndex].description}</p>
        </div>
      
        {/* Contrôles du carrousel */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index ? "w-8 bg-white" : "w-2 bg-white opacity-50"
              }`}
            />
          ))}
        </div>
      
        {/* Flèches de navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full p-2 hover:bg-opacity-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full p-2 hover:bg-opacity-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;