import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaEdit, FaTrash } from "react-icons/fa";

const CategoriesPage = () => {
  const [searchText, setSearchText] = useState("");

  const categories = [
    { id: 1, name: "Category 1", description: "Description for Category 1", photo: "/path/to/photo1.jpg" },
    { id: 2, name: "Category 2", description: "Description for Category 2", photo: "/path/to/photo2.jpg" },
    { id: 3, name: "Category 3", description: "Description for Category 3", photo: "/path/to/photo3.jpg" },
  ];

  // Filter categories based on search text
  const filteredCategories = categories.filter((category) => {
    const matchSearch = searchText
      ? category.name.toLowerCase().includes(searchText.toLowerCase())
      : true;
    return matchSearch;
  });

  // Handle edit action
  const handleEdit = (categoryId) => {
    console.log(`Editing category with ID: ${categoryId}`);
    // Add your edit logic here
  };

  // Handle delete action
  const handleDelete = (categoryId) => {
    console.log(`Deleting category with ID: ${categoryId}`);
    // Add your delete logic here
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6 text-black">Categories</h1>

      <div className="flex flex-wrap gap-2 mb-6 items-center">
        <Input
          placeholder="Search categories"
          className="w-full md:w-1/3 text-black"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button className="w-full md:w-10">🔍</Button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 font-medium text-black">Photo</th>
              <th className="px-4 py-2 font-medium text-black">Name</th>
              <th className="px-4 py-2 font-medium text-black">Description</th>
              <th className="px-4 py-2 font-medium text-black">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.map((category) => (
              <tr key={category.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">
                  <img src={category.photo} alt={category.name} className="w-16 h-16 object-cover" />
                </td>
                <td className="px-4 py-2 text-black">{category.name}</td>
                <td className="px-4 py-2 text-black">{category.description}</td>
                <td className="px-4 py-2 text-blue-600 cursor-pointer">
                  <div className="flex space-x-2">
                    <Button className="mr-2" onClick={() => handleEdit(category.id)}>
                      <FaEdit />
                    </Button>
                    <Button className="bg-red-500 text-white" onClick={() => handleDelete(category.id)}>
                      <FaTrash />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredCategories.length === 0 && (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  No categories found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoriesPage;
