import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

const Cities = () => {
  const [searchText, setSearchText] = useState("");
  const [cities, setCities] = useState([
    {
      id: 1,
      name: "Tangier",
      description :"lorem lorem lorem lorem",
      image :"/images/tanger.png"
      
      
    },
    {
      id: 1,
      name: "Sahra",
      description :"lorem lorem lorem lorem",
      image :"/images/sah.jpeg"
    },
    {
      id: 1,
      name: "City2",
      description :"lorem lorem lorem lorem",
      image :"/images/aboutFirst.jpg"
    },
  ]);


  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-black font-semibold mb-6">Cities</h1>

      {/* Search and Select in the same row */}
      <div className="flex space-x-4 mb-4">
        {/* Search input */}
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 text-black" />
          <input
            type="text"
            placeholder="Search City"
            className="pl-10 pr-4 py-2 w-full bg-white border border-gray-300 rounded-full shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-[#c5a76f] text-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

      </div>


      {/* Evaluators Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 font-medium text-black">Photo</th>
              <th className="px-4 py-2 font-medium text-black">Name</th>
              <th className="px-4 py-2 font-medium text-black">Description</th>
              <th className="px-4 py-2 font-medium text-black">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCities.map((city) => (
              <tr key={city.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2 text-black">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="px-4 py-2 text-black">{city.name}</td>
                <td className="px-4 py-2 text-black">{city.description}</td>
      
                <td className="px-4 py-2 flex gap-4">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredCities.length === 0 && (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  No City found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Evaluator Button */}
      <div className="mt-4">
        <Button className="bg-[#c5a76f] text-white">
          Add New City
        </Button>
      </div>
    </div>
  );
};

export default Cities;
