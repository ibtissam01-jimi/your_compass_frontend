import React, { useRef } from "react";
import { Heart, ChevronRight, ChevronLeft } from "lucide-react";

const experiences = [
  {
    title: "Desert Camp in Morocco",
    image: "images/sah.jpeg",
    votes: "12,670",
  },
  {
    title: "Quad Biking in Agadir",
    image: "images/pict.png",
    votes: "13,211",
    isSelected: true, // Ajout pour montrer la bordure bleue
  },
  {
    title: "Best Day in Tangier",
    image: "images/abt.jpeg",
    votes: "2,777",
  },
];

const ExperienceCard = ({ image, title, votes, isSelected }) => {
  return (
    <div
      className={`relative bg-white rounded-2xl overflow-hidden w-full h-96 shadow-md hover:shadow-xl transition-shadow duration-300 ${
        isSelected ? "ring-2 ring-blue-500" : ""
      }`}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:scale-105 transition">
        <Heart className="text-gray-700" size={20} />
      </button>
      <div className="p-4 text-center absolute bottom-4 left-0 right-0 bg-gradient-to-t from-black to-transparent">
        <h3 className="font-semibold text-lg text-white">{title}</h3>
        <div className="flex items-center justify-center mt-3">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="w-2.5 h-2.5 bg-yellow-400 rounded-full"
              ></span>
            ))}
          </div>
          <p className="ml-2 text-sm text-white">{votes}</p>
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="px-6 py-12 max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">Top experiences</h2> {/* تكبير الخط */}
      <p className="text-gray-600 mb-8">Experience the best of Morocco</p>
      <div className="relative flex items-center">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          <ChevronLeft className="text-gray-700" size={26} />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 scroll-smooth scrollbar-hidden w-full"
        >
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          <ChevronRight className="text-gray-700" size={26} />
        </button>
      </div>
    </div>
  );
};

export default ExperienceSection;
