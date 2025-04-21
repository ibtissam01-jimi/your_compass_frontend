import React, { useEffect, useState } from "react";
import axios from "axios";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [userId, setUserId] = useState(1); // Remplacer par l'ID réel de l'utilisateur connecté

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/favorites/${userId}`)
      .then((res) => setFavorites(res.data))
      .catch((err) => console.error("Erreur lors du chargement des favoris", err));
  }, [userId]);

  return (
    <div className="px-6 py-12 max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Vos Favoris ❤️</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-600">Aucun service ajouté aux favoris.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {favorites.map((fav) => (
            <div
              key={fav.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <img
                src={fav.service.image}
                alt={fav.service.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{fav.service.title}</h3>
                <p className="text-gray-600">{fav.service.description?.substring(0, 80)}...</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
