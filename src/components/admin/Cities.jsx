import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AddCity from "./addCity";

const CitiesTable = ({ newCity }) => {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const initialCities = [
    {
      name: "Casablanca",
      region: "Grand Casablanca",
      population: "3,359,818",
      photoURL: "/images/tanger.png",
    },
    {
      name: "Marrakech",
      region: "Marrakech-Safi",
      population: "928,850",
      photoURL: "/images/sah.jpeg",
    },
    {
      name: "Fès",
      region: "Fès-Meknès",
      population: "1,112,072",
      photoURL: "/images/aboutFirst.jpg",
    },
  ];

  const [cities, setCities] = useState(
    newCity ? [...initialCities, newCity] : initialCities
  );

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {!showForm && (
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-black">Villes</h1>
        </div>
      )}

      <Card className="shadow-lg rounded-lg">
        <CardContent className="p-4">
          {showForm ? (
            <AddCity />
          ) : (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <Input
                  placeholder="Rechercher une ville..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full sm:max-w-sm"
                />
                <Button
                  onClick={() => setShowForm(true)}
                  className="bg-[#0f3556] text-white hover:bg-[#b89e65] transition"
                >
                  + Ajouter une Ville
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left border-collapse">
                  <thead className="bg-gray-100 text-gray-600">
                    <tr>
                      <th className="px-4 py-2">Photo</th>
                      <th className="px-4 py-2">Nom</th>
                      <th className="px-4 py-2">Région</th>
                      <th className="px-4 py-2">Population</th>
                      <th className="px-4 py-2 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCities.map((city, idx) => (
                      <tr key={idx} className="border-t hover:bg-gray-50 transition-all">
                        <td className="px-4 py-2">
                          {city.photoURL ? (
                            <img
                              src={city.photoURL}
                              alt={city.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                          ) : (
                            <span className="text-gray-400 italic">Aucune photo</span>
                          )}
                        </td>
                        <td className="px-4 py-2">{city.name}</td>
                        <td className="px-4 py-2">{city.region}</td>
                        <td className="px-4 py-2">{city.population}</td>
                        <td className="px-4 py-2 flex justify-center gap-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-100">Delete</Button>
                        </td>
                      </tr>
                    ))}
                    {filteredCities.length === 0 && (
                      <tr>
                        <td colSpan="5" className="text-center py-6 text-gray-500">
                          Aucune ville trouvée.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CitiesTable;
