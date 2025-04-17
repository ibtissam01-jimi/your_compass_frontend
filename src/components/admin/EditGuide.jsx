import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function EditGuide({ guide, onCancel, onSave }) {
  const [formData, setFormData] = useState({
    ...guide,
    photo: null,
    CV: null,
  });

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

    const updatedGuide = {
      ...formData,
      photoURL: formData.photo ? URL.createObjectURL(formData.photo) : guide.photo,
      CVURL: formData.CV ? URL.createObjectURL(formData.CV) : guide.CV,
    };

    onSave(updatedGuide);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-[#f4f1ec] rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Modifier le Guide</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField label="Nom" name="name" value={formData.name} onChange={handleChange} />
        <InputField label="Email" name="email" value={formData.email} onChange={handleChange} />
        <InputField label="Adresse" name="address" value={formData.address} onChange={handleChange} />
        <InputField label="Ville" name="city" value={formData.city} onChange={handleChange} />
        <InputField label="CIN" name="CIN" value={formData.CIN} onChange={handleChange} />
        <InputField label="Téléphone" name="phone" value={formData.phone} onChange={handleChange} />

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Photo du Guide</label>
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
          {formData.photo ? (
            <img src={URL.createObjectURL(formData.photo)} alt="Aperçu" className="mt-4 h-40 object-cover rounded" />
          ) : (
            <img src={guide.photo} alt="Aperçu" className="mt-4 h-40 object-cover rounded" />
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">CV du Guide</label>
          <input type="file" accept=".pdf" onChange={handleCVChange} />
          <div className="mt-4 text-sm text-gray-500">
            {formData.CV ? `Nouveau CV : ${formData.CV.name}` : `CV actuel : ${guide.CV}`}
          </div>
        </div>

        <div className="flex justify-between">
          <Button type="button" onClick={onCancel} className="bg-gray-300 hover:bg-gray-400">Annuler</Button>
          <Button type="submit" className="bg-[#c5a76f] text-white">Enregistrer</Button>
        </div>
      </form>
    </div>
  );
}

function InputField({ label, name, value, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700 font-medium mb-1">{label}</label>
      <Input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-md px-4 py-2"
      />
    </div>
  );
}
