import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

const destinations = [
  {
    name: "Red Marrakech",
    image: "images/sah.jpeg",
  },
  {
    name: "El Hoceïma",
    image: "images/hh.jpeg",
  },
  {
    name: "Blue Gem",
    image: "images/blc.png",
  },
  {
    name: "Tangier",
    image: "images/tangier.jpeg",
  },
  {
    name: "Fes",
    image: "images/fes.jpeg",
  },
  {
    name: "Agadir",
    image: "images/agadir.jpeg",
  },
];

export default function Destinations() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextDestinations = () => {
    if (currentIndex < destinations.length - 3) {
      setCurrentIndex(currentIndex + 1); // الانتقال لعرض الصور التالية
    }
  };

  const prevDestinations = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // العودة لعرض الصور السابقة
    }
  };

  return (
    <div className="max-w-full mx-auto py-10 px-4">
      {/* النص في بداية الصفحة من اليسار */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-black">The best destinations for your next vacation</h2>
        <p className="text-gray-600 mb-10">Here's where other travelers are going</p>
      </div>

      <div className="relative w-full pl-16"> {/* إضافة padding-left لتقريب الصور نحو اليمين */}
        {/* زر السهم الأيسر */}
        <button
          onClick={prevDestinations}
          disabled={currentIndex === 0} // تعطيل الزر عند الوصول للبداية
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full shadow-md z-10 disabled:bg-gray-300"
        >
          <ChevronLeft className="text-gray-700" />
        </button>

        {/* عرض ثلاث صور في نفس الوقت مع زيادة المسافة بين الصور */}
        <div className="flex gap-8 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 30}%)` }}>
          {destinations.slice(currentIndex, currentIndex + 3).map((destination, index) => (
            <div
              key={index}
              className="relative min-w-[30%] h-96 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover rounded-lg"
              />
              {/* رفع الاسم قليلاً */}
              <h3 className="absolute bottom-8 left-4 text-white font-bold text-4xl drop-shadow-lg">
                {destination.name}
              </h3>
            </div>
          ))}
        </div>

        {/* زر السهم الأيمن */}
        <button
          onClick={nextDestinations}
          disabled={currentIndex >= destinations.length - 3} // تعطيل الزر عند الوصول للنهاية
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full shadow-md z-10 disabled:bg-gray-300"
        >
          <ChevronRight className="text-gray-700" />
        </button>
      </div>
    </div>
  );
}
