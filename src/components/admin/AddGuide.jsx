import React, { useState } from "react";
 // au cas où tu veux ajouter une description plus tard
 // ton tableau de guides si tu l'as déjà

export default function AddGuide() {
  const [formData, setFormData] = useState({
    name: "",
    photo: "",
    email: "",
    address: "",
    city: "",
    CIN: "",
    phone: "",
    CV: "",
  });

  const [showTable, setShowTable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Guide ajouté:", formData);
    // Ici tu peux faire un appel à ton API pour enregistrer le guide
    setFormData({
      name: "",
      photo: "",
      email: "",
      address: "",
      city: "",
      CIN: "",
      phone: "",
      CV: "",
    });
    setShowTable(true);
  };

  const handleCancel = () => {
    setShowTable(true);
  };

  if (showTable) {
    return <GuidesTable />; // à remplacer par ton composant réel
  }

  return (
    <div className="max-w-3xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-semibold text-[#2d3748] tracking-tight">Ajouter un Guide</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputField label="Nom" name="name" value={formData.name} onChange={handleChange} />
          <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
          <InputField label="Ville" name="city" value={formData.city} onChange={handleChange} />
          <InputField label="Adresse" name="address" value={formData.address} onChange={handleChange} />
          <InputField label="Téléphone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
          <InputField label="CIN" name="CIN" value={formData.CIN} onChange={handleChange} />
          <InputField label="Photo (URL)" name="photo" value={formData.photo} onChange={handleChange} />
          <InputField label="CV (URL)" name="CV" value={formData.CV} onChange={handleChange} />
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
            Ajouter Guide
          </Button>
        </div>
      </form>
    </div>
  );
}

// Composant de champ factorisé
const InputField = ({ label, name, value, onChange, type = "text" }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-lg font-medium text-[#4a5568]">{label}</label>
    <Input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={label}
      className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] transition-all text-xl"
    />
  </div>
);
