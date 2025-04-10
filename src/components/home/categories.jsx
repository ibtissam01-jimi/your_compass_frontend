import React from "react";
import { Hotel, Users, Utensils, MapPin, Car } from "lucide-react";

const features = [
  {
    icon: <Hotel size={50} className="text-yellow-600" />,
    title: "Hotels",
    description:
      "Enjoy delicious dishes at our signature restaurants, offering a unique blend of traditional Moroccan flavors and modern culinary creativity.",
  },
  {
    icon: <Users size={50} className="text-yellow-600" />,
    title: "Tour Guide",
    description:
      "Enjoy delicious dishes at our signature restaurants, offering a unique blend of traditional Moroccan flavors and modern culinary creativity.",
  },
  {
    icon: <Utensils size={50} className="text-yellow-600" />,
    title: "Restaurants",
    description:
      "Enjoy delicious dishes at our signature restaurants, offering a unique blend of traditional Moroccan flavors and modern culinary creativity.",
  },
  {
    icon: <MapPin size={50} className="text-yellow-600" />,
    title: "Destinations",
    description:
      "Explore the most beautiful tourist destinations, where breathtaking landscapes, rich history, and unique cultural experiences await at every turn.",
  },
  {
    icon: <Car size={50} className="text-yellow-600" />,
    title: "Rental Cars",
    description:
      "Enjoy the freedom to explore Morocco at your own pace with our reliable car rental services.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-5xl font-semibold font-serif mb-4 text-black">Our Features</h2>
      <p className="text-gray-600 text-lg mb-16">
        Your guide to the best hotels, restaurants, attractions, and transportation in Morocco.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-6">
            {feature.icon}
            <h3 className="text-2xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600 text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
