import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AddSubmission from "./addSubmission"; // Assuming you have this component

const SubmissionsTable = () => {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false); // Toggle form visibility

  const allSubmissions = [
    {
      name: "Hotel Dawliz",
      category: "Hotels",
      city: "Salé",
      owner: "Ahmed Zahid",
      date: "2025-03-17",
      status: "Approved",
      email: "dawliz@example.com",
      phone_number: "0612345678",
      address: "Av. Hassan II, Salé",
      website: "http://dawlizhotel.com",
    },
    {
      name: "Café Majorelle",
      category: "Restaurants",
      city: "Marrakech",
      owner: "Fatima Nouri",
      date: "2025-03-20",
      status: "Pending",
      email: "majorelle@example.com",
      phone_number: "0623456789",
      address: "Rue Yves Saint Laurent, Marrakech",
      website: "http://cafemajorelle.ma",
    },
    {
      name: "Riad Atlas",
      category: "Hébergement",
      city: "Fès",
      owner: "Youssef El Mansouri",
      date: "2025-03-22",
      status: "Rejected",
      email: "atlas@example.com",
      phone_number: "0634567890",
      address: "Quartier Fes El Bali, Fès",
      website: "http://riadatlasfes.ma",
    },
  ];

  const filteredSubmissions = allSubmissions.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.city.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });

  const statusColor = {
    Approved: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Rejected: "bg-red-100 text-red-700",
  };

  const handleAddSubmission = () => {
    setShowForm(true); // Show the form and hide the list
  };

  return (
    <div className="space-y-4">
      {/* Hide the title when the form is shown */}
      {!showForm && (
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-black">Soumissions</h1>
        </div>
      )}

      <Card className="shadow-lg rounded-lg">
        <CardContent className="p-4">
          {/* If showForm is true, show the AddSubmission form */}
          {showForm ? (
            <AddSubmission />
          ) : (
            // If showForm is false, show the list and search bar
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <Input
                  placeholder="Rechercher par nom ou ville..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full sm:max-w-sm"
                />
                <Button
                  onClick={handleAddSubmission}
                  className="bg-[#0f3556] text-white hover:bg-[#b89e65] transition"
                >
                  + Ajouter une Soumission
                </Button>
              </div>

              {/* Submissions table */}
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left border-collapse">
                  <thead className="bg-gray-100 text-gray-600">
                    <tr>
                      <th className="px-4 py-2">Nom</th>
                      <th className="px-4 py-2">Catégorie</th>
                      <th className="px-4 py-2">Ville</th>
                      <th className="px-4 py-2">Propriétaire</th>
                      <th className="px-4 py-2">Adresse</th>
                      <th className="px-4 py-2">Site Web</th>
                      <th className="px-4 py-2">Email</th>
                      <th className="px-4 py-2">Téléphone</th>
                      <th className="px-4 py-2">Date</th>
                      <th className="px-4 py-2">Statut</th>
                      <th className="px-4 py-2 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSubmissions.map((item, idx) => (
                      <tr key={idx} className="border-t hover:bg-gray-50 transition-all">
                        <td className="px-4 py-2">{item.name}</td>
                        <td className="px-4 py-2">{item.category}</td>
                        <td className="px-4 py-2">{item.city}</td>
                        <td className="px-4 py-2">{item.owner}</td>
                        <td className="px-4 py-2">{item.address}</td>
                        <td className="px-4 py-2">
                          <a href={item.website} className="text-blue-600 underline site_web" target="_blank" rel="noreferrer">
                            {item.website}
                          </a>
                        </td>
                        <td className="px-4 py-2">{item.email}</td>
                        <td className="px-4 py-2">{item.phone_number}</td>
                        <td className="px-4 py-2">{item.date}</td>
                        <td className="px-4 py-2">
                          <span className={`px-2 py-1 text-xs rounded font-medium ${statusColor[item.status]}`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-4 py-2 flex justify-center gap-2">
                          <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-100 flex items-center gap-1">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-100 flex items-center gap-1">
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}

                    {filteredSubmissions.length === 0 && (
                      <tr>
                        <td colSpan="11" className="text-center py-6 text-gray-500">
                          Aucune soumission trouvée.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SubmissionsTable;
