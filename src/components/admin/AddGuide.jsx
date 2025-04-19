// import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import Guides from "./guides";

// export default function AddGuide() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//     city: "",
//     CIN: "",
//     phone: "",
//     photo: null,
//     CV: null,
//   });

//   const [showTable, setShowTable] = useState(false);
//   const [addedGuide, setAddedGuide] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     setFormData((prev) => ({ ...prev, photo: file }));
//   };

//   const handleCVChange = (e) => {
//     const file = e.target.files[0];
//     setFormData((prev) => ({ ...prev, CV: file }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const guideData = {
//       ...formData,
//       photoURL: formData.photo ? URL.createObjectURL(formData.photo) : null,
//       CVURL: formData.CV ? URL.createObjectURL(formData.CV) : null,
//     };

//     console.log("Guide ajouté :", guideData);
//     setAddedGuide(guideData);
//     setShowTable(true);
//   };

//   const handleCancel = () => {
//     setShowTable(true);
//   };

//   if (showTable) return <Guides newGuide={addedGuide} />;

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-[#f4f1ec] rounded-lg shadow-lg">
//       <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Ajouter un Guide</h2>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <InputField label="Nom" name="name" value={formData.name} onChange={handleChange} />
//         <InputField label="Email" name="email" value={formData.email} onChange={handleChange} />
//         <InputField label="Adresse" name="address" value={formData.address} onChange={handleChange} />
//         <InputField label="Ville" name="city" value={formData.city} onChange={handleChange} />
//         <InputField label="CIN" name="CIN" value={formData.CIN} onChange={handleChange} />
//         <InputField label="Téléphone" name="phone" value={formData.phone} onChange={handleChange} />

//         {/* Champ pour la photo */}
//         <div className="flex flex-col">
//           <label className="text-gray-700 font-medium mb-1">Photo du Guide</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handlePhotoChange}
//             className="border border-gray-300 rounded-md px-4 py-2 text-[#9ca3af] file:text-[#9ca3af] file:border-0 file:bg-transparent"
//           />
//           {formData.photo && (
//             <img
//               src={URL.createObjectURL(formData.photo)}
//               alt="Aperçu"
//               className="mt-4 h-40 object-cover rounded"
//             />
//           )}
//         </div>

//         {/* Champ pour le CV */}
//         <div className="flex flex-col">
//           <label className="text-gray-700 font-medium mb-1">CV du Guide</label>
//           <input
//             type="file"
//             accept=".pdf"
//             onChange={handleCVChange}
//             className="border border-gray-300 rounded-md px-4 py-2 text-[#9ca3af] file:text-[#9ca3af] file:border-0 file:bg-transparent"
//           />
//           {formData.CV && (
//             <div className="mt-4 text-sm text-gray-500">CV ajouté : {formData.CV.name}</div>
//           )}
//         </div>

//         <div className="flex justify-between">
//           <Button type="button" onClick={handleCancel} className="bg-gray-300 hover:bg-gray-400">
//             Annuler
//           </Button>
//           <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700">
//             Ajouter
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// }

// // ✅ InputField avec placeholder et style
// const InputField = ({ label, name, value, onChange }) => (
//   <div className="flex flex-col">
//     <label className="text-gray-700 font-medium mb-1" htmlFor={name}>
//       {label}
//     </label>
//     <Input
//       id={name}
//       name={name}
//       value={value}
//       onChange={onChange}
//       placeholder={`Entrez ${label.toLowerCase()}`}
//       className="border border-gray-300 rounded-md px-4 py-2 placeholder-[#9ca3af] text-gray-800"
//     />
//   </div>
// );




// import React, { useState } from "react";
// import axios from "axios";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import Guides from "./guides";

// export default function AddGuide() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//     city: "",
//     CIN: "",
//     phone: "",
//     photo: null,
//     CV: null,
//   });

//   const [showTable, setShowTable] = useState(false);
//   const [addedGuide, setAddedGuide] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     setFormData((prev) => ({ ...prev, photo: file }));
//   };

//   const handleCVChange = (e) => {
//     const file = e.target.files[0];
//     setFormData((prev) => ({ ...prev, CV: file }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("email", formData.email);
//     data.append("address", formData.address);
//     data.append("city", formData.city);
//     data.append("CIN", formData.CIN);
//     data.append("phone", formData.phone);
//     if (formData.photo) data.append("photo", formData.photo);
//     if (formData.CV) data.append("CV", formData.CV);

//     try {
//       const response = await axios.post("http://localhost:8000/api/add-guides", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       window.alert("Guide ajouté avec succès !");
//       setAddedGuide(response.data.guide);
//       setShowTable(true);
//     } catch (error) {
//       console.error("Erreur lors de l'ajout :", error);
//       window.alert("Erreur lors de l'ajout du guide.");
//     }
//   };

//   const handleCancel = () => {
//     setShowTable(true);
//   };

//   if (showTable) return <Guides newGuide={addedGuide} />;

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-[#f4f1ec] rounded-lg shadow-lg">
//       <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Ajouter un Guide</h2>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <InputField label="Nom" name="name" value={formData.name} onChange={handleChange} />
//         <InputField label="Email" name="email" value={formData.email} onChange={handleChange} />
//         <InputField label="Adresse" name="address" value={formData.address} onChange={handleChange} />
//         <InputField label="Ville" name="city" value={formData.city} onChange={handleChange} />
//         <InputField label="CIN" name="CIN" value={formData.CIN} onChange={handleChange} />
//         <InputField label="Téléphone" name="phone" value={formData.phone} onChange={handleChange} />

//         {/* Photo */}
//         <div className="flex flex-col">
//           <label className="text-gray-700 font-medium mb-1">Photo du Guide</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handlePhotoChange}
//             className="border border-gray-300 rounded-md px-4 py-2 text-[#9ca3af] file:text-[#9ca3af] file:border-0 file:bg-transparent"
//           />
//           {formData.photo && (
//             <img
//               src={URL.createObjectURL(formData.photo)}
//               alt="Aperçu"
//               className="mt-4 h-40 object-cover rounded"
//             />
//           )}
//         </div>

//         {/* CV */}
//         <div className="flex flex-col">
//           <label className="text-gray-700 font-medium mb-1">CV du Guide</label>
//           <input
//             type="file"
//             accept=".pdf"
//             onChange={handleCVChange}
//             className="border border-gray-300 rounded-md px-4 py-2 text-[#9ca3af] file:text-[#9ca3af] file:border-0 file:bg-transparent"
//           />
//           {formData.CV && (
//             <div className="mt-4 text-sm text-gray-500">CV ajouté : {formData.CV.name}</div>
//           )}
//         </div>

//         <div className="flex justify-between">
//           <Button type="button" onClick={handleCancel} className="bg-gray-300 hover:bg-gray-400">
//             Annuler
//           </Button>
//           <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700">
//             Ajouter
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// }

// // 🔧 Composant InputField réutilisable
// const InputField = ({ label, name, value, onChange }) => (
//   <div className="flex flex-col">
//     <label className="text-gray-700 font-medium mb-1" htmlFor={name}>
//       {label}
//     </label>
//     <Input
//       id={name}
//       name={name}
//       value={value}
//       onChange={onChange}
//       placeholder={`Entrez ${label.toLowerCase()}`}
//       className="border border-gray-300 rounded-md px-4 py-2 placeholder-[#9ca3af] text-gray-800"
//     />
//   </div>
// );






// import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import Guides from "./guides";

// export default function AddGuide() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//     city_id: "", // Assure-toi que cet ID existe dans ta base
//     CIN: "",
//     phone: "",
//     photo: null,
//     CV: null,
//     username: "",
//     description: "",
//   });

//   const [showTable, setShowTable] = useState(false);
//   const [addedGuide, setAddedGuide] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePhotoChange = (e) => {
//     setFormData((prev) => ({ ...prev, photo: e.target.files[0] }));
//   };

//   const handleCVChange = (e) => {
//     setFormData((prev) => ({ ...prev, CV: e.target.files[0] }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Vérifie que tous les champs obligatoires sont remplis
//     if (!formData.name || !formData.username || !formData.email || !formData.city_id || !formData.phone) {
//       alert("Tous les champs obligatoires doivent être remplis !");
//       return;
//     }

//     const form = new FormData();
//     form.append("name", formData.name);
//     form.append("email", formData.email);
//     form.append("address", formData.address);
//     form.append("city_id", formData.city_id);
//     form.append("cin", formData.CIN);
//     form.append("phone_number", formData.phone);
//     form.append("username", formData.username);
//     form.append("description", formData.description);

//     if (formData.photo) form.append("photo", formData.photo);
//     if (formData.CV) form.append("cv", formData.CV); // si tu l'ajoutes côté Laravel plus tard

//     try {
//       const response = await axios.post("http://localhost:8000/api/add-guides", form, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       alert("Guide ajouté avec succès !");
//       setAddedGuide(response.data.guide);
//       setShowTable(true);
//     } catch (error) {
//       console.error(error);
//       if (error.response?.data?.errors) {
//         alert("Erreur : " + Object.values(error.response.data.errors).join("\n"));
//       } else {
//         alert("Une erreur s'est produite !");
//       }
//     }
//   };

//   const handleCancel = () => setShowTable(true);

//   if (showTable) return <Guides newGuide={addedGuide} />;

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-[#f4f1ec] rounded-lg shadow-lg">
//       <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Ajouter un Guide</h2>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <InputField label="Nom" name="name" value={formData.name} onChange={handleChange} />
//         <InputField label="Username" name="username" value={formData.username} onChange={handleChange} />
//         <InputField label="Description" name="description" value={formData.description} onChange={handleChange} />
//         <InputField label="Email" name="email" value={formData.email} onChange={handleChange} />
//         <InputField label="Adresse" name="address" value={formData.address} onChange={handleChange} />
//         <InputField label="Ville ID" name="city_id" value={formData.city_id} onChange={handleChange} />
//         <InputField label="CIN" name="CIN" value={formData.CIN} onChange={handleChange} />
//         <InputField label="Téléphone" name="phone" value={formData.phone} onChange={handleChange} />

//         <div className="flex flex-col">
//           <label className="text-gray-700 font-medium mb-1">Photo du Guide</label>
//           <input type="file" accept="image/*" onChange={handlePhotoChange} />
//           {formData.photo && (
//             <img src={URL.createObjectURL(formData.photo)} alt="aperçu" className="mt-4 h-40 object-cover rounded" />
//           )}
//         </div>

//         <div className="flex flex-col">
//           <label className="text-gray-700 font-medium mb-1">CV du Guide (optionnel)</label>
//           <input type="file" accept=".pdf" onChange={handleCVChange} />
//           {formData.CV && <div className="mt-4 text-sm text-gray-500">CV ajouté : {formData.CV.name}</div>}
//         </div>

//         <div className="flex justify-between">
//           <Button type="button" onClick={handleCancel} className="bg-gray-300 hover:bg-gray-400">Annuler</Button>
//           <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700">Ajouter</Button>
//         </div>
//       </form>
//     </div>
//   );
// }

// const InputField = ({ label, name, value, onChange }) => (
//   <div className="flex flex-col">
//     <label className="text-gray-700 font-medium mb-1" htmlFor={name}>{label}</label>
//     <Input
//       id={name}
//       name={name}
//       value={value}
//       onChange={onChange}
//       placeholder={`Entrez ${label.toLowerCase()}`}
//       className="border border-gray-300 rounded-md px-4 py-2 placeholder-[#9ca3af] text-gray-800"
//     />
//   </div>
// );


import React, { useState, useEffect } from 'react';

const AddGuide = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [cin, setCin] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [photo, setPhoto] = useState(null);
  const [cityId, setCityId] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Charger les villes depuis l'API
    const fetchCities = async () => {
      try {
        const response = await fetch('http://localhost:8000/cities');
        const data = await response.json();
        setCities(data);
      } catch (err) {
        console.error('Erreur lors du chargement des villes:', err);
      }
    };

    fetchCities();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifier que le champ username n'est pas vide
    if (!username.trim()) {
      alert('Le champ "Nom d\'utilisateur" est requis');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('username', username); // On envoie directement la valeur de username
    formData.append('description', description);
    formData.append('cin', cin);
    formData.append('address', address);
    formData.append('email', email);
    formData.append('phone_number', phoneNumber);
    formData.append('photo', photo);
    formData.append('city_id', cityId); // ID NUMÉRIQUE

    try {
      const response = await fetch('http://localhost:8000/api/AddGuides', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert('Guide ajouté avec succès');
        // Réinitialisation du formulaire
        setName('');
        setUsername('');
        setDescription('');
        setCin('');
        setAddress('');
        setEmail('');
        setPhoneNumber('');
        setPhoto(null);
        setCityId('');
      } else {
        alert('Erreur: ' + result.message);
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du guide:", error);
      alert("Une erreur s'est produite");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md space-y-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Ajouter un Guide</h2>

      <Input label="Nom" value={name} onChange={setName} />
      <Input label="Nom d'utilisateur" value={username} onChange={setUsername} />
      <Textarea label="Description" value={description} onChange={setDescription} />
      <Input label="CIN" value={cin} onChange={setCin} />
      <Input label="Adresse" value={address} onChange={setAddress} />
      <Input label="Email" value={email} onChange={setEmail} type="email" />
      <Input label="Numéro de téléphone" value={phoneNumber} onChange={setPhoneNumber} />
      <FileInput label="Photo" onChange={setPhoto} />

      <div className="flex flex-col">
        <label className="text-gray-700 mb-1">Ville</label>
        <select
          value={cityId}
          onChange={(e) => setCityId(e.target.value)}
          required
          className="border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sélectionnez une ville</option>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Ajouter le Guide
      </button>
    </form>
  );
};

const Input = ({ label, value, onChange, type = "text" }) => (
  <div className="flex flex-col">
    <label className="text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
      className="border border-gray-300 rounded-md px-4 py-2 placeholder-[#9ca3af] text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={`Entrez ${label.toLowerCase()}`}
    />
  </div>
);

const Textarea = ({ label, value, onChange }) => (
  <div className="flex flex-col">
    <label className="text-gray-700 mb-1">{label}</label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
      className="border border-gray-300 rounded-md px-4 py-2 h-24 resize-none placeholder-[#9ca3af] text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={`Entrez ${label.toLowerCase()}`}
    />
  </div>
);

const FileInput = ({ label, onChange }) => (
  <div className="flex flex-col">
    <label className="text-gray-700 mb-1">{label}</label>
    <input
      type="file"
      accept="image/*"
      onChange={(e) => onChange(e.target.files[0])}
      className="file:border file:border-gray-300 file:rounded-md file:px-4 file:py-1 file:bg-white file:text-sm file:text-gray-700"
    />
  </div>
);

export default AddGuide;
