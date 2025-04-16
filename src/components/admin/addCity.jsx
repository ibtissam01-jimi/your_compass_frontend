import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CitiesTable from "./Cities";

export default function AddCity() {
  const [formData, setFormData] = useState({
    name: "",
    region: "",
    population: "",
    photo: null,
  });

  const [showTable, setShowTable] = useState(false);
  const [addedCity, setAddedCity] = useState(null); // pour renvoyer la ville avec photo

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, photo: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cityData = {
      ...formData,
      photoURL: formData.photo ? URL.createObjectURL(formData.photo) : null,
    };

    console.log("Ville ajoutée :", cityData);
    setAddedCity(cityData); // passer la ville avec la photo
    setShowTable(true);
  };

  const handleCancel = () => {
    setShowTable(true);
  };

  if (showTable) return <CitiesTable newCity={addedCity} />;

  return (
    <div className="max-w-xl mx-auto p-6 bg-bg-[#f4f1ec] rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Ajouter une Ville</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField label="Nom de la ville" name="name" value={formData.name} onChange={handleChange} />
        <InputField label="Région" name="region" value={formData.region} onChange={handleChange} />
        <InputField label="Population" name="population" value={formData.population} onChange={handleChange} />
        
        {/* Champ pour la photo */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Photo de la ville</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="border border-gray-300 rounded-md px-4 py-2"
          />
          {formData.photo && (
            <img
              src={URL.createObjectURL(formData.photo)}
              alt="Aperçu"
              className="mt-4 h-40 object-cover rounded"
            />
          )}
        </div>

        <div className="flex justify-between">
          <Button type="button" onClick={handleCancel} className="bg-gray-300 hover:bg-gray-400">
            Annuler
          </Button>
          <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700">
            Ajouter
          </Button>
        </div>
      </form>
    </div>
  );
}

const InputField = ({ label, name, value, onChange }) => (
  <div className="flex flex-col">
    <label className="text-gray-700 font-medium mb-1" htmlFor={name}>
      {label}
    </label>
    <Input
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded-md px-4 py-2"
    />
  </div>
);
