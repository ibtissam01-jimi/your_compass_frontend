import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter, MoreHorizontal, Edit, Trash } from "lucide-react";

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState("all");

  const stats = [
    { label: "Business Soumissions", value: "75" },
    { label: "Website Visitors", value: "420K" },
    { label: "Utilisateurs", value: "357" },
  ];

  const users = [
    { type: "User", name: "Karima Rbahon", email: "karimawebdev@gmail.com", avatar: "/avatar1.png" },
    { type: "Guide", name: "Karima Rbahon", email: "karimawebdev@gmail.com", avatar: "/avatar1.png" },
    { type: "User", name: "Karima Rbahon", email: "karimawebdev@gmail.com", avatar: "/avatar1.png" },
    { type: "Contact", name: "Karima Rbahon", email: "karimawebdev@gmail.com", avatar: "/avatar1.png" },
  ];

  const submissions = [
    { name: "Hotel Dawliz", category: "Hotels", city: "Salé", owner: "Owner Name", date: "17-03-2025", status: "Approved" },
    { name: "Hotel Dawliz", category: "Hotels", city: "Salé", owner: "Owner Name", date: "17-03-2025", status: "Pending" },
    { name: "Hotel Dawliz", category: "Hotels", city: "Salé", owner: "Owner Name", date: "17-03-2025", status: "Rejected" },
  ];

  const trending = [
    { name: "Hotel Dawliz", category: "Hotels", city: "Salé", impressions: "32K", clicks: "1.3K", reviews: 603, date: "2025-03-01" },
    { name: "Hotel Dawliz", category: "Hotels", city: "Salé", impressions: "15K", clicks: "900", reviews: 80, date: "2025-02-15" },
    { name: "Hotel Dawliz", category: "Hotels", city: "Salé", impressions: "9K", clicks: "530", reviews: 56, date: "2025-01-10" },
  ];

  const statusColor = {
    Approved: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Rejected: "bg-red-100 text-red-700",
  };

  const typeColor = {
    User: "bg-green-100 text-green-700",
    Guide: "bg-yellow-100 text-yellow-700",
    Contact: "bg-blue-100 text-blue-700",
  };

  // Filtrer les données de "Trending" par mois
  const filterTrendingByMonth = (month) => {
    if (month === "all") return trending;
    return trending.filter(item => item.date.startsWith(month));
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-black">Dashboard</h1>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filter Période
        </Button>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="shadow-lg rounded-lg hover:shadow-xl transition-all">
            <CardContent className="p-4 text-center">
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Utilisateurs */}
      <Card className="shadow-lg rounded-lg">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg">Users</h3>
            <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer" />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border-collapse">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="px-4 py-2">Account Type</th>
                  <th className="px-4 py-2">Username</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr key={idx} className="border-t hover:bg-gray-50 transition-all">
                    <td className="px-4 py-2">{user.type}</td>
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2 flex items-center gap-2">
                      <Button variant="outline" size="sm" className="text-blue-600">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600">
                        <Trash className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Soumissions récentes */}
      <Card className="shadow-lg rounded-lg">
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2">Recent Submissions</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border-collapse">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="px-4 py-2">Business Name</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">City</th>
                  <th className="px-4 py-2">Owner</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((item, idx) => (
                  <tr key={idx} className="border-t hover:bg-gray-50 transition-all">
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.category}</td>
                    <td className="px-4 py-2">{item.city}</td>
                    <td className="px-4 py-2">{item.owner}</td>
                    <td className="px-4 py-2">{item.date}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${statusColor[item.status]}`}>{item.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Trending Businesses */}
      <Card className="shadow-lg rounded-lg">
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2">Trending Businesses</h3>
          <div className="mb-4">
            <label htmlFor="monthFilter" className="mr-2 text-sm">Filter by Month:</label>
            <select
              id="monthFilter"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-md"
            >
              <option value="all">All</option>
              <option value="2025-03">March 2025</option>
              <option value="2025-02">February 2025</option>
              <option value="2025-01">January 2025</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border-collapse">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="px-4 py-2">Business Name</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">City</th>
                  <th className="px-4 py-2">Impressions</th>
                  <th className="px-4 py-2">Clicks</th>
                  <th className="px-4 py-2">Reviews</th>
                </tr>
              </thead>
              <tbody>
                {filterTrendingByMonth(selectedMonth).map((item, idx) => (
                  <tr key={idx} className="border-t hover:bg-gray-50 transition-all">
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.category}</td>
                    <td className="px-4 py-2">{item.city}</td>
                    <td className="px-4 py-2">{item.impressions}</td>
                    <td className="px-4 py-2">{item.clicks}</td>
                    <td className="px-4 py-2">{item.reviews}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
