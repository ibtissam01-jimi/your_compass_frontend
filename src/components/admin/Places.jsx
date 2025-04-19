




import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import AddPlace from "./addPlace";

const Places = () => {
  const [searchText, setSearchText] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // Appel API pour récupérer les places (services avec category_id = 4)
    axios.get("http://localhost:8000/places") // Ajuste le lien si nécessaire
      .then((response) => {
        // Mapping pour correspondre à la structure de tes données affichées
        const formattedPlaces = response.data.map((place) => ({
          id: place.id,
          name: place.name,
          description: place.description,
          image: place.image , // au cas où l'image n'est pas définie
          city: place.city?.name,
          localisation: place.address,
          category: place.category?.name,
          website: place.website,
          email: place.email,
        }));
        setPlaces(formattedPlaces);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des places :", error);
      });
  }, []);

  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAddPlace = () => {
    setShowForm(true);
  };


  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this place?")) {
      try {
        await axios.delete(`http://localhost:8000/api/services/${id}`);
        // Mise à jour locale de la liste des places
        setPlaces((prevPlaces) => prevPlaces.filter((place) => place.id !== id));
      } catch (error) {
        console.error("Erreur lors de la suppression :", error);
      }
    }
  };
  

  return (
    <div className="space-y-4">
      {!showForm && (
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-black">Tourist Places</h1>
          <Button
            onClick={handleAddPlace}
            className="bg-[#c5a76f] text-white hover:bg-[#b89e65] transition"
          >
            + Add Place
          </Button>
        </div>
      )}

      {showForm ? (
        <AddPlace setShowForm={setShowForm} setPlaces={setPlaces} />
      ) : (
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <Input
              placeholder="Search by name..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full sm:max-w-sm text-black"
            />
          </div>

          <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
            <table className="min-w-full text-sm text-left border-collapse bg-[#f4f1ec]">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="px-4 py-2">Photo</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Location</th>
                  <th className="px-4 py-2">City</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPlaces.map((place) => (
                  <tr key={place.id} className="border-t hover:bg-gray-50 transition-all">
                    <td className="px-4 py-2">
                      <img
                        src={`http://localhost:8000${place.image}`}
                        alt={place.name}
                        className="w-10 h-10 rounded-full"
                      />
                    </td>
                    <td className="px-4 py-2 text-black">{place.name}</td>
                    <td className="px-4 py-2 text-black">{place.description}</td>
                    <td className="px-4 py-2 text-black">{place.localisation}</td>
                    <td className="px-4 py-2 text-black">{place.city}</td>
                    <td className="px-4 py-2 text-black">{place.category}</td>
                    <td className="px-4 py-2 flex justify-center gap-2">
                      <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-100">
                        Edit
                      </Button>
                      <Button
  variant="outline"
  size="sm"
  className="text-red-600 border-red-600 hover:bg-red-100"
  onClick={() => handleDelete(place.id)}
>
  Delete
</Button>

                    </td>
                  </tr>
                ))}
                {filteredPlaces.length === 0 && (
                  <tr>
                    <td colSpan="7" className="text-center py-6 text-gray-500">
                      No places found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Places;

