import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Guides from "./guides";

export default function AddGuide() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    CIN: "",
    phone: "",
    photo: null,
    CV: null,
  });

  const [showTable, setShowTable] = useState(false);
  const [addedGuide, setAddedGuide] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, photo: file }));
  };

  const handleCVChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, CV: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const guideData = {
      ...formData,
      photoURL: formData.photo ? URL.createObjectURL(formData.photo) : null,
      CVURL: formData.CV ? URL.createObjectURL(formData.CV) : null,
    };

    console.log("Guide ajouté :", guideData);
    setAddedGuide(guideData);
    setShowTable(true);
  };

  const handleCancel = () => {
    setShowTable(true);
  };

  if (showTable) return <Guides newGuide={addedGuide} />;

  return (
    <div className="max-w-xl mx-auto p-6 bg-[#f4f1ec] rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Ajouter un Guide</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField label="Nom" name="name" value={formData.name} onChange={handleChange} />
        <InputField label="Email" name="email" value={formData.email} onChange={handleChange} />
        <InputField label="Adresse" name="address" value={formData.address} onChange={handleChange} />
        <InputField label="Ville" name="city" value={formData.city} onChange={handleChange} />
        <InputField label="CIN" name="CIN" value={formData.CIN} onChange={handleChange} />
        <InputField label="Téléphone" name="phone" value={formData.phone} onChange={handleChange} />

        {/* Champ pour la photo */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Photo du Guide</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="border border-gray-300 rounded-md px-4 py-2 text-[#9ca3af] file:text-[#9ca3af] file:border-0 file:bg-transparent"
          />
          {formData.photo && (
            <img
              src={URL.createObjectURL(formData.photo)}
              alt="Aperçu"
              className="mt-4 h-40 object-cover rounded"
            />
          )}
        </div>

        {/* Champ pour le CV */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">CV du Guide</label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleCVChange}
            className="border border-gray-300 rounded-md px-4 py-2 text-[#9ca3af] file:text-[#9ca3af] file:border-0 file:bg-transparent"
          />
          {formData.CV && (
            <div className="mt-4 text-sm text-gray-500">CV ajouté : {formData.CV.name}</div>
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

// ✅ InputField avec placeholder et style
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
      placeholder={`Entrez ${label.toLowerCase()}`}
      className="border border-gray-300 rounded-md px-4 py-2 placeholder-[#9ca3af] text-gray-800"
    />
  </div>
);
