import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { SearchIcon, Pencil, Trash } from "lucide-react";
import AddGuide from "./AddGuide";
import EditGuide from "./EditGuide";

const Guides = () => {
  const [searchText, setSearchText] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingGuide, setEditingGuide] = useState(null);
  const [evaluators, setEvaluators] = useState([
    {
      id: 1,
      name: "John Doe",
      photo: "/images/gui1.jpeg",
      email: "john.doe@example.com",
      address: "123 Main St, Cityville",
      city: "Tangier",
      CIN: "KB897654",
      phone: "+1234567890",
      CV: "/cv/guide1.pdf",
    },
    {
      id: 2,
      name: "Jane Smith",
      photo: "/images/gui1.jpeg",
      email: "jane.smith@example.com",
      address: "456 Elm St, Townville",
      city: "Marrakech",
      CIN: "KC123456",
      phone: "+0987654321",
      CV: "/cv/guide2.pdf",
    },
  ]);

  const handleDelete = (id) => {
    setEvaluators(evaluators.filter((evaluator) => evaluator.id !== id));
  };

  const handleEdit = (guide) => {
    setEditingGuide(guide);
  };

  const handleSaveEdit = (updatedGuide) => {
    setEvaluators((prev) =>
      prev.map((evaluator) =>
        evaluator.id === updatedGuide.id ? updatedGuide : evaluator
      )
    );
    setEditingGuide(null);
  };

  const handleCancelEdit = () => {
    setEditingGuide(null);
  };

  const filteredEvaluators = evaluators.filter((evaluator) =>
    evaluator.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAddGuide = () => {
    setShowForm(true);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Formulaire AddGuide */}
      {showForm && !editingGuide && (
        <AddGuide
          setShowForm={setShowForm}
          setEvaluators={setEvaluators}
        />
      )}

      {/* Formulaire EditGuide */}
      {editingGuide && (
        <EditGuide
          guide={editingGuide}
          onCancel={handleCancelEdit}
          onSave={handleSaveEdit}
        />
      )}

      {/* Header and Search */}
      {!showForm && !editingGuide && (
        <>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-black font-semibold">Guides</h1>
            <Button
              onClick={handleAddGuide}
              className="bg-[#c5a76f] text-white hover:bg-[#b89e65] transition"
            >
              Add Guide
            </Button>
          </div>

          <div className="relative mb-4">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search Guide"
              className="pl-10 pr-4 py-2 w-full bg-white border border-gray-300 rounded-full shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-[#c5a76f]"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="min-w-full text-left text-sm bg-[#f4f1ec]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 font-medium text-black">Photo</th>
                  <th className="px-4 py-2 font-medium text-black">Name</th>
                  <th className="px-4 py-2 font-medium text-black">Email</th>
                  <th className="px-4 py-2 font-medium text-black">Address</th>
                  <th className="px-4 py-2 font-medium text-black">City</th>
                  <th className="px-4 py-2 font-medium text-black">CIN</th>
                  <th className="px-4 py-2 font-medium text-black">CV</th>
                  <th className="px-4 py-2 font-medium text-black">Phone</th>
                  <th className="px-4 py-2 font-medium text-black">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEvaluators.map((evaluator) => (
                  <tr key={evaluator.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2 text-black">
                      <img
                        src={evaluator.photo}
                        alt={evaluator.name}
                        className="w-10 h-10 rounded-full"
                      />
                    </td>
                    <td className="px-4 py-2 text-black">{evaluator.name}</td>
                    <td className="px-4 py-2 text-black">{evaluator.email}</td>
                    <td className="px-4 py-2 text-black">{evaluator.address}</td>
                    <td className="px-4 py-2 text-black">{evaluator.city}</td>
                    <td className="px-4 py-2 text-black">{evaluator.CIN}</td>
                    <td className="px-4 py-2 text-black">
                      <a
                        href={evaluator.CV}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-600"
                      >
                        CV
                      </a>
                    </td>
                    <td className="px-4 py-2 text-black">{evaluator.phone}</td>
                    <td className="px-4 py-2 flex gap-2">
                      <button
                        onClick={() => handleEdit(evaluator)}
                        className="p-1 bg-blue-500 hover:bg-blue-600 text-white rounded"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(evaluator.id)}
                        className="p-1 bg-red-500 hover:bg-red-600 text-white rounded"
                      >
                        <Trash size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredEvaluators.length === 0 && (
                  <tr>
                    <td colSpan="9" className="p-4 text-center text-gray-500">
                      No evaluators found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Guides;
