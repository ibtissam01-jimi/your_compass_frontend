import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import AddGuide from "./AddGuide";

const Guides = () => {
  const [searchText, setSearchText] = useState("");
  const [showForm, setShowForm] = useState(false); // Toggle form visibility
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
      name: "John Doe",
      photo: "/images/gui1.jpeg",
      email: "john.doe@example.com",
      address: "123 Main St, Cityville",
      city:"Tangier",
      CIN:"KB897654",
      phone: "+1234567890",
      CV:"/cv/guide1.pdf",
  },
  {
      id: 3,
      name: "John Doe",
      photo: "/images/gui1.jpeg",
      email: "john.doe@example.com",
      address: "123 Main St, Cityville",
      city:"Tangier",
      CIN:"KB897654",
      phone: "+1234567890",
      CV:"/cv/guide1.pdf",
  },
  ]);

  const handleDelete = (id) => {
    setEvaluators(evaluators.filter((evaluator) => evaluator.id !== id));
  };

  const handleEdit = (id) => {
    console.log("Editing evaluator with ID:", id);
  };

  const filteredEvaluators = evaluators.filter((evaluator) =>
    evaluator.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAddGuide = () => {
    setShowForm(true); // Show the form and hide the list
  };

  return (
    <div className="container mx-auto p-6">
      {/* Hide title and button when the form is shown */}
      {!showForm && (
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-black font-semibold">Guides</h1>
          <Button
            onClick={handleAddGuide}
            className="bg-[#c5a76f] text-white hover:bg-[#b89e65] transition"
          >
            Add Guide
          </Button>
        </div>
      )}

      {/* If showForm is true, show the AddGuideForm component */}
      {showForm ? (
        <AddGuide setShowForm={setShowForm} setEvaluators={setEvaluators} />
      ) : (
        // If showForm is false, show the list of guides
        <>
          {/* Search Bar */}
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

          {/* Evaluators Table */}
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
                    <td className="px-4 py-2 text-black cv_guide">
                      <a href={evaluator.CV} className="text-black" target="_blank" rel="noopener noreferrer">
                        {evaluator.CV}
                      </a>
                    </td>
                    <td className="px-4 py-2 text-black">{evaluator.phone}</td>
                    <td className="px-4 py-2 flex gap-4">
                      <button
                        onClick={() => handleEdit(evaluator.id)}
                        className="text-white"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(evaluator.id)}
                        className="text-white"
                      >
                        Delete
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
