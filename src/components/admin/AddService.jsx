import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Services from "./Services";

export default function AddService() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    address: "",
    email: "",
    phone_number: "",
  });

  const [showTable, setShowTable] = useState(false);

  const navigate = useNavigate();

  // Gère les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Service ajouté :", formData);

    // Réinitialiser les champs après soumission
    setFormData({
      name: "",
      description: "",
      address: "",
      email: "",
      phone_number: "",
    });

    // Afficher la liste des services après soumission
    setShowTable(true);
  };

  // Annuler l'ajout et revenir à la liste des services
  const handleCancel = () => {
    setShowTable(true);
  };

  // Si l'état `showTable` est vrai, afficher la liste des services
  if (showTable) {
    return <Services />;
  }

  return (
    <div className="max-w-3xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-semibold text-[#2d3748] tracking-tight">
          Ajouter un Service
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputField
            label="Nom du service"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            label="Adresse"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            label="Numéro de téléphone"
            name="phone_number"
            type="tel"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg font-medium text-[#4a5568]">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description du service"
            className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] placeholder-[#9ca3af] transition-all text-xl"
          />
        </div>

        <div className="flex justify-between">
          <Button
            type="button"
            onClick={handleCancel}
            className="bg-[#e2e8f0] text-[#4a5568] px-8 py-4 rounded-xl hover:bg-[#d1d5db] transition-all duration-200 text-xl"
          >
            Annuler
          </Button>

          <Button
            type="submit"
            className="bg-[#4a90e2] text-white px-8 py-4 rounded-xl hover:bg-[#357ab7] transition-all duration-200 text-xl"
          >
            Ajouter Service
          </Button>
        </div>
      </form>
    </div>
  );
}

// Un petit composant pour factoriser les champs
const InputField = ({ label, name, value, onChange, type = "text" }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-lg font-medium text-[#4a5568]">
      {label}
    </label>
    <Input
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={label}
      className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] placeholder-[#9ca3af] transition-all text-xl"
    />
  </div>
);
