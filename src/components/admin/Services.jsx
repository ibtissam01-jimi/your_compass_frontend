import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Services() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [searchText, setSearchText] = useState("");

  const services = [
    {
      name: "Dawliz",
      date: "23/09/2022",
      owner: "Jacob Marcus",
      category: "Hotels",
      status: "Active",
      action: "See More",
    },
    {
      name: "Sofitel",
      date: "01/10/2022",
      owner: "Emma Watson",
      category: "Restaurants",
      status: "Inactive",
      action: "See More",
    },
    {
      name: "Spa Zen",
      date: "15/10/2022",
      owner: "Lucas",
      category: "Spa",
      status: "Active",
      action: "See More",
    },
  ];

  const filteredServices = services.filter((service) => {
    const matchDate = selectedDate ? service.date === selectedDate : true;
    const matchCategory = selectedCategory ? service.category === selectedCategory : true;
    const matchStatus = selectedStatus ? service.status === selectedStatus : true;
    const matchSearch = searchText
      ? service.name.toLowerCase().includes(searchText.toLowerCase())
      : true;
    return matchDate && matchCategory && matchStatus && matchSearch;
  });

  // Get unique values for the filter selects
  const dates = [...new Set(services.map((service) => service.date))];
  const categories = [...new Set(services.map((service) => service.category))];
  const statuses = [...new Set(services.map((service) => service.status))];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6 text-black">Services</h1>

      <div className="flex flex-wrap gap-2 mb-6 items-center">
        <Input
          placeholder="Search by name or phone"
          className="w-full md:w-1/3 text-black"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {/* Select Date */}
        <select
          className="w-full md:w-40 p-2 border border-gray-300 rounded text-black"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        >
          <option value="">Select Date</option>
          {dates.map((date, index) => (
            <option key={index} value={date}>
              {date}
            </option>
          ))}
        </select>

        {/* Select Category */}
        <select
          className="w-full md:w-40 p-2 border border-gray-300 rounded text-black"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Select Status */}
        <select
          className="w-full md:w-40 p-2 border border-gray-300 rounded text-black"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="">Select Status</option>
          {statuses.map((status, index) => (
            <option key={index} value={status}>
              {status}
            </option>
          ))}
        </select>

        <Button className="w-full md:w-10">🔍</Button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 font-medium text-black">Business Name</th>
              <th className="px-4 py-2 font-medium text-black">Date</th>
              <th className="px-4 py-2 font-medium text-black">Owner</th>
              <th className="px-4 py-2 font-medium text-black">Category</th>
              <th className="px-4 py-2 font-medium text-black">Status</th>
              <th className="px-4 py-2 font-medium text-black">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.map((service, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2 text-black">{service.name}</td>
                <td className="px-4 py-2 text-black">{service.date}</td>
                <td className="px-4 py-2 text-black">{service.owner}</td>
                <td className="px-4 py-2 text-black">{service.category}</td>
                <td className="px-4 py-2 text-black">{service.status}</td>
                <td className="px-4 py-2 text-blue-600 cursor-pointer">{service.action}</td>
              </tr>
            ))}
            {filteredServices.length === 0 && (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
