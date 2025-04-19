import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import AddPlace from "./addPlace";  // Assuming correct path for AddPlace component
import EditPlace from "./EditPlace";  // Import the EditPlace component

const Places = () => {
  const [searchText, setSearchText] = useState("");
  const [showForm, setShowForm] = useState(false); // Toggle form visibility
  const [places, setPlaces] = useState([
    {
      id: 1,
      name: "Rmilat",
      description: "Best place to enjoy",
      photo: "/images/abt.jpeg",
      city: "Tangier",
      localisation: "remilat ...",
      category: "Tourist Place",
    },
    {
      id: 2,
      name: "Cap Spartel",
      description: "Best place to enjoy",
      photo: "/images/sah.jpeg",
      city: "Tangier",
      localisation: "remilat ...",
      category: "Tourist Place",
    },
    {
      id: 3,
      name: "Hafa",
      description: "Best place to enjoy",
      photo: "/images/pict.png",
      city: "Tangier",
      localisation: "remilat ...",
      category: "Tourist Place",
    },
  ]);
  const [selectedPlace, setSelectedPlace] = useState(null); // State to hold selected place for editing

  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAddPlace = () => {
    setShowForm(true); // Show the form and hide the list
  };

  const handleEditPlace = (place) => {
    setSelectedPlace(place); // Set the place to be edited
  };

  const handleSavePlace = (updatedPlace) => {
    setPlaces(
      places.map((place) =>
        place.id === updatedPlace.id ? updatedPlace : place
      )
    );
    setSelectedPlace(null); // Hide the edit form after saving
  };

  const handleCancelEdit = () => {
    setSelectedPlace(null); // Cancel editing and hide the form
  };

  return (
    <div className="space-y-4">
      {/* Hide the title when the form is shown */}
      {!showForm && !selectedPlace && (
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

      {/* If showForm is true, show the AddPlace form */}
      {showForm ? (
        <AddPlace setShowForm={setShowForm} setPlaces={setPlaces} />
      ) : selectedPlace ? (
        // If selectedPlace is not null, show the EditPlace form
        <EditPlace place={selectedPlace} onSave={handleSavePlace} onCancel={handleCancelEdit} />
      ) : (
        // If showForm is false, show the list and search bar
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <Input
              placeholder="Search by name..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full sm:max-w-sm text-black"
            />
          </div>

          {/* Places table */}
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
                        src={place.photo}
                        alt={place.name}
                        className="w-10 h-10 rounded-full"
                      />
                    </td>
                    <td className="px-4 py-2 text-black">{place.name}</td>
                    <td className="px-4 py-2 text-black">{place.description}</td>
                    <td className="px-4 py-2 text-black">{place.localisation}</td>
                    <td className="px-4 py-2 text-black">{place.city}</td>
                    <td className="px-4 py-2 text-black">{place.category}</td>
                    <td className="px-4 py-2 flex justify-center gap-2 ">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-600 border-blue-600 hover:bg-blue-100"
                        onClick={() => handleEditPlace(place)}
                      >
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-100">
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
