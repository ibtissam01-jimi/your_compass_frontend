export default function ExperienceGrid() {
    const data = [
      { title: "Amazing Views", img: "/images/views.jpg" },
      { title: "Best Moments", img: "/images/moments.jpg" },
      { title: "Top Experiences", img: "/images/experiences.jpg" },
      { title: "Confortable Hotels", img: "/images/hotels.jpg" },
      { title: "Location Voitures", img: "/images/car-rental.jpg" },
      { title: "Best Restaurants", img: "/images/restaurants.jpg" },
    ];
  
    return (
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg group h-80 cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h2 className="text-white text-2xl font-semibold text-center px-2">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  