import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EditCity = ({ cityId, onSave, onCancel }) => {
  const [city, setCity] = useState({
    id: cityId,
    name: "",
    description: "",
    photo: null,
  });

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/cities/${cityId}`);
        const data = response.data;
        setCity({
          id: data.id,
          name: data.name,
          description: data.description,
          photo: null, // Ne pas charger l'image ici, on la change manuellement
        });
      } catch (error) {
        console.error("Erreur lors du chargement de la ville :", error);
      }
    };

    fetchCity();
  }, [cityId]);

  const handleFileChange = (e) => {
    setCity({ ...city, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Créez un FormData pour inclure l'image et les autres champs
    const formData = new FormData();
    formData.append("name", city.name);
    formData.append("description", city.description);
    if (city.photo) {
      formData.append("photo", city.photo); // Ajoutez l'image si elle a été sélectionnée
    }

    try {
      // Effectuez l'appel PUT pour mettre à jour la ville dans la base de données
      const response = await axios.put(
        `http://localhost:8000/cities/${city.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Spécifiez le type de contenu pour l'upload de fichiers
          },
        }
      );
      // Si la mise à jour réussit, appelez la fonction de rappel onSave
      onSave(response.data);
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la ville :", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
      <h2 className="text-center text-4xl font-semibold text-[#2d3748] mb-6">
        Modifier la Ville
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nom de la ville */}
        <InputField
          label="Nom de la ville"
          name="name"
          placeholder="Ex : Casablanca"
          value={city.name}
          onChange={(e) => setCity({ ...city, name: e.target.value })}
        />

        {/* Description */}
        <InputField
          label="Description"
          name="description"
          placeholder="Entrez une description courte de la ville"
          value={city.description}
          onChange={(e) => setCity({ ...city, description: e.target.value })}
        />

        {/* Image */}
        <div className="flex flex-col ">
          <label htmlFor="photo" className="text-lg font-medium text-[#4a5568] mb-1">
            Image
          </label>
          <Input
            id="photo"
            name="photo"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full rounded-lg border-2 border-[#e2e8f0] py-2 px-4 text-lg"
          />
        </div>

        {/* Boutons */}
        <div className="flex justify-between mt-8">
          <Button
            type="button"
            onClick={onCancel}
            className="bg-[#e2e8f0] text-[#4a5568] px-6 py-3 rounded-xl hover:bg-[#d1d5db] text-lg"
          >
            Annuler
          </Button>
          <Button
            type="submit"
            className="bg-[#4a90e2] text-white px-6 py-3 rounded-xl hover:bg-[#357ab7] text-lg"
          >
            Sauvegarder
          </Button>
        </div>
      </form>
    </div>
  );
};

const InputField = ({ label, name, value, onChange, type = "text", placeholder }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-lg font-medium text-[#4a5568] mb-1">
      {label}
    </label>
    <Input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full py-3 px-4 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-lg text-black"
    />
  </div>
);

export default EditCity;
