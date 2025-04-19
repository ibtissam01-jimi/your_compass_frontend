import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import CategoriesPage from "./categories";

export default function AddCategory() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const [showTable, setShowTable] = useState(false);
  const [newCategory, setNewCategory] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCat = {
      id: Math.floor(Math.random() * 100000), // ID temporaire (tu peux utiliser un backend pour un vrai ID)
      name: formData.name,
      description: formData.description,
      photoURL: "/images/default-category.jpg",
    };

    setNewCategory(newCat);
    setFormData({ name: "", description: "" });
    setShowTable(true);
  };

  const handleCancel = () => {
    setShowTable(true);
  };

  if (showTable) {
    return <CategoriesPage newCategory={newCategory} />;
  }

  return (
    <div className="max-w-3xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-semibold text-[#2d3748]">Ajouter une Catégorie</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <InputField
          label="Nom de la catégorie"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextareaField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <div className="flex justify-between">
          <Button
            type="button"
            onClick={handleCancel}
            className="bg-[#e2e8f0] text-[#4a5568] px-8 py-4 rounded-xl hover:bg-[#d1d5db]"
          >
            Annuler
          </Button>
          <Button
            type="submit"
            className="bg-[#c5a76f] text-white px-8 py-4 rounded-xl hover:bg-[#b18c56]"
          >
            Ajouter Catégorie
          </Button>
        </div>
      </form>
    </div>
  );
}

const InputField = ({ label, name, value, onChange, type = "text" }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-lg font-medium text-[#4a5568]">
      {label}
    </label>
    <Input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#c5a76f]"
    />
  </div>
);

const TextareaField = ({ label, name, value, onChange }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-lg font-medium text-[#4a5568]">
      {label}
    </label>
    <Textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#c5a76f]"
    />
  </div>
);
