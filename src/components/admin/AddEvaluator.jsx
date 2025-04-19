import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import EvaluatorsTable from "./users";

const AddEvaluator = ({ setShowForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    role: "",
    nationality: "",
    birthDate: "",
  });
  const [showTable, setShowTable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Evaluator:", formData);

    setFormData({
      name: "",
      username: "",
      email: "",
      role: "",
      nationality: "",
      birthDate: "",
    });

    setShowTable(true);
  };

  const handleCancel = () => {
    setShowTable(true);
  };

  if (showTable) {
    return <EvaluatorsTable />;
  }

  return (
    <div className="max-w-3xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-semibold text-[#2d3748] tracking-tight">
          Ajouter un Évaluateur
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 placeholder-[#9ca3af]">
          <InputField
            label="Nom complet"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            label="Nom d'utilisateur"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 placeholder-[#9ca3af]">
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            label="Nationalité"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 placeholder-[#9ca3af]">
          <InputField
            label="Date de naissance"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            type="date"
            placeholder="jj/mm/aaaa"
          />
          <SelectField
            label="Rôle"
            name="role"
            value={formData.role}
            onChange={handleChange}
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
            Ajouter Évaluateur
          </Button>
        </div>
      </form>
    </div>
  );
};

const InputField = ({ label, name, value, onChange, type = "text", placeholder }) => (
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
      placeholder={placeholder || label}
      className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] placeholder-[#9ca3af] transition-all text-xl"
    />
  </div>
);

const SelectField = ({ label, value, onChange, name }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-lg font-medium text-[#4a5568]">
      {label}
    </label>
    <select
      id={name}
      value={value}
      onChange={onChange}
      name={name}
      className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] placeholder-[#9ca3af] text-xl"
    >
      <option value="" className="text-[#9ca3af]">Sélectionnez un rôle</option>
      <option value="evaluator" className="text-[#9ca3af]">Evaluateur</option>
      <option value="admin" className="text-[#9ca3af]">Administrateur</option>
      <option value="manager" className="text-[#9ca3af]">Manager</option>
    </select>
  </div>
);

export default AddEvaluator;
