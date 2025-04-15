import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Link } from "react-router-dom";


const SubmissionsTable = () => {
  const allSubmissions = [
    {
      name: "Hotel Dawliz",
      category: "Hotels",
      city: "Salé",
      owner: "Ahmed Zahid",
      date: "2025-03-17",
      status: "Approved",
    },
    {
      name: "Café Majorelle",
      category: "Restaurants",
      city: "Marrakech",
      owner: "Fatima Nouri",
      date: "2025-03-20",
      status: "Pending",
    },
    {
      name: "Riad Atlas",
      category: "Hébergement",
      city: "Fès",
      owner: "Youssef El Mansouri",
      date: "2025-03-22",
      status: "Rejected",
    },
  ];

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const filteredSubmissions = allSubmissions.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.city.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === "" || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const statusColor = {
    Approved: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Liste des Soumissions</h1>
        <Link
            to="/admin/submissions/ajouter"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
            + Ajouter une Soumission
        </Link>

      </div>

      <Card className="shadow-lg rounded-lg">
        <CardContent className="p-4">
          {/* Filtres */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <Input
              placeholder="Rechercher par nom ou ville..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:max-w-sm"
            />

            <Select onValueChange={(value) => setStatusFilter(value)} defaultValue="">
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filtrer par statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Tous</SelectItem>
                <SelectItem value="Approved">Approuvé</SelectItem>
                <SelectItem value="Pending">En attente</SelectItem>
                <SelectItem value="Rejected">Rejeté</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Tableau */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border-collapse">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="px-4 py-2">Nom du Business</th>
                  <th className="px-4 py-2">Catégorie</th>
                  <th className="px-4 py-2">Ville</th>
                  <th className="px-4 py-2">Propriétaire</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Statut</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubmissions.map((item, idx) => (
                  <tr key={idx} className="border-t hover:bg-gray-50 transition-all">
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.category}</td>
                    <td className="px-4 py-2">{item.city}</td>
                    <td className="px-4 py-2">{item.owner}</td>
                    <td className="px-4 py-2">{item.date}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 text-xs rounded font-medium ${statusColor[item.status]}`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}

                {filteredSubmissions.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center py-6 text-gray-500">
                      Aucune soumission trouvée.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubmissionsTable;
