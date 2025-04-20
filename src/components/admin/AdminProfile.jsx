import React, { useState, useEffect } from "react";
import { PencilIcon } from "lucide-react";
import axios from "axios";

const AdminProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    role: "",
    phone: "",
    city: "",
    country: "",
    image: "",
    joinedAt: "",
    stats: {
      users: 0,
      services: 0,
      places: 0,
    },
  });

  useEffect(() => {
    // Assurez-vous que l'URL de l'API est correcte
    axios
      .get("api/admin/profile")
      .then((response) => {
        setAdmin(response.data.admin);
      })
      .catch((error) => {
        console.error("Il y a eu une erreur avec l'API :", error);
      });
  }, []);

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
    // Envoyer les données via une requête API pour mettre à jour l'admin
    axios
      .put("api/admin/profile", admin)
      .then((response) => {
        console.log("Admin mis à jour :", response.data);
        // Vous pouvez mettre à jour l'état avec la réponse si nécessaire
        setAdmin(response.data.admin);
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour de l'admin :", error);
      });
  };

  return (
    <div className="p-8 ml-64 mt-24">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-6">
            <img
              src={admin.image}
              alt="Admin"
              className="w-24 h-24 rounded-full border-4 border-[#c5a76f]"
            />
            <div>
              <h2 className="text-3xl font-bold text-[#0f3556]">{admin.name}</h2>
              <p className="text-gray-500">{admin.role}</p>
              <p className="text-sm text-gray-400">Membre depuis le {admin.joinedAt}</p>
            </div>
          </div>
          <button
            onClick={() => setEditMode(!editMode)}
            className="flex items-center gap-2 px-4 py-2 bg-[#c5a76f] text-white rounded-lg hover:bg-[#b5975d] transition"
          >
            <PencilIcon className="w-4 h-4" />
            {editMode ? "Annuler" : "Modifier"}
          </button>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#f9f9f9] rounded-xl p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-[#0f3556]">{admin.stats.users}</p>
            <p className="text-gray-500 text-sm">Utilisateurs gérés</p>
          </div>
          <div className="bg-[#f9f9f9] rounded-xl p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-[#0f3556]">{admin.stats.services}</p>
            <p className="text-gray-500 text-sm">Services ajoutés</p>
          </div>
          <div className="bg-[#f9f9f9] rounded-xl p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-[#0f3556]">{admin.stats.places}</p>
            <p className="text-gray-500 text-sm">Lieux référencés</p>
          </div>
        </div>

        {/* Infos ou Formulaire */}
        {editMode ? (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <label className="text-black">Nom complet</label>
              <input
                type="text"
                name="name"
                value={admin.name}
                onChange={handleChange}
                className="w-full border-2 border-black rounded px-3 py-2 text-black"
              />
            </div>
            <div>
              <label className="text-black">Email</label>
              <input
                type="email"
                name="email"
                value={admin.email}
                onChange={handleChange}
                className="w-full border-2 border-black rounded px-3 py-2 text-black"
              />
            </div>
            <div>
              <label className="text-black">Téléphone</label>
              <input
                type="text"
                name="phone"
                value={admin.phone}
                onChange={handleChange}
                className="w-full border-2 border-black rounded px-3 py-2 text-black"
              />
            </div>
            <div>
              <label className="text-black">Ville</label>
              <input
                type="text"
                name="city"
                value={admin.city}
                onChange={handleChange}
                className="w-full border-2 border-black rounded px-3 py-2 text-black"
              />
            </div>
            <div>
              <label className="text-black">Pays</label>
              <input
                type="text"
                name="country"
                value={admin.country}
                onChange={handleChange}
                className="w-full border-2 border-black rounded px-3 py-2 text-black"
              />
            </div>

            <div className="col-span-full text-right mt-4">
              <button
                type="submit"
                className="bg-[#0f3556] text-white px-6 py-2 rounded-lg hover:bg-[#0d2e4b] transition"
              >
                Enregistrer
              </button>
            </div>
          </form>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-black">Nom complet</p>
              <p className="text-black font-medium">{admin.name}</p>
            </div>
            <div>
              <p className="text-black">Email</p>
              <p className="text-black font-medium">{admin.email}</p>
            </div>
            <div>
              <p className="text-black">Téléphone</p>
              <p className="text-black font-medium">{admin.phone}</p>
            </div>
            <div>
              <p className="text-black">Rôle</p>
              <p className="text-black font-medium">{admin.role}</p>
            </div>
            <div>
              <p className="text-black">Ville</p>
              <p className="text-black font-medium">{admin.city}</p>
            </div>
            <div>
              <p className="text-black">Pays</p>
              <p className="text-black font-medium">{admin.country}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProfile;
