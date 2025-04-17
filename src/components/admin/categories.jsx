// import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
// import { Card, CardContent } from "@/components/ui/card";

// const CategoriesPage = () => {
//   const [searchText, setSearchText] = useState("");
//   const [categories, setCategories] = useState([
//     { id: 1, name: "Category 1", description: "Description for Category 1", photo: "/path/to/photo1.jpg" },
//     { id: 2, name: "Category 2", description: "Description for Category 2", photo: "/path/to/photo2.jpg" },
//     { id: 3, name: "Category 3", description: "Description for Category 3", photo: "/path/to/photo3.jpg" },
//   ]);

//   const [newCategory, setNewCategory] = useState({
//     name: "",
//     description: "",
//     photo: "",
//   });
//   const [isAddingCategory, setIsAddingCategory] = useState(false);

//   // Filter categories based on search text
//   const filteredCategories = categories.filter((category) => {
//     const matchSearch = searchText
//       ? category.name.toLowerCase().includes(searchText.toLowerCase())
//       : true;
//     return matchSearch;
//   });

//   // Handle edit action
//   const handleEdit = (categoryId) => {
//     console.log(`Editing category with ID: ${categoryId}`);
//     // Add your edit logic here
//   };

//   // Handle delete action
//   const handleDelete = (categoryId) => {
//     setCategories(categories.filter((category) => category.id !== categoryId));
//     console.log(`Deleting category with ID: ${categoryId}`);
//     // Add your delete logic here
//   };

//   // Handle add new category
//   const handleAddCategory = () => {
//     setCategories([
//       ...categories,
//       {
//         ...newCategory,
//         id: categories.length + 1, // Generate a new ID
//       },
//     ]);
//     setNewCategory({ name: "", description: "", photo: "" });
//     setIsAddingCategory(false);
//   };

//   return (
//     <div className="space-y-4">
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl font-bold text-black">Categories</h1>
//         <Button
//           variant="primary"
//           size="sm"
//           onClick={() => setIsAddingCategory(!isAddingCategory)}
//           className="flex items-center gap-2"
//         >
//           <FaPlus /> Add Category
//         </Button>
//       </div>

//       {/* Add Category Form */}
//       {isAddingCategory && (
//         <Card className="shadow-lg rounded-lg mt-4">
//           <CardContent className="p-4">
//             <h2 className="text-xl font-semibold mb-4">Add New Category</h2>
//             <div className="space-y-4">
//               <Input
//                 placeholder="Category Name"
//                 value={newCategory.name}
//                 onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
//                 className="w-full"
//               />
//               <Input
//                 placeholder="Category Description"
//                 value={newCategory.description}
//                 onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
//                 className="w-full"
//               />
//               <Input
//                 placeholder="Photo URL"
//                 value={newCategory.photo}
//                 onChange={(e) => setNewCategory({ ...newCategory, photo: e.target.value })}
//                 className="w-full"
//               />
//               <div className="flex justify-end gap-4">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   onClick={() => setIsAddingCategory(false)}
//                   className="text-gray-600"
//                 >
//                   Cancel
//                 </Button>
//                 <Button
//                   variant="primary"
//                   size="sm"
//                   onClick={handleAddCategory}
//                   disabled={!newCategory.name || !newCategory.description || !newCategory.photo}
//                 >
//                   Add Category
//                 </Button>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       )}

//       <Card className="shadow-lg rounded-lg mt-4">
//         <CardContent className="p-4">
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
//             <Input
//               placeholder="Search categories"
//               value={searchText}
//               onChange={(e) => setSearchText(e.target.value)}
//               className="w-full sm:max-w-sm"
//             />
//           </div>

//           {/* Categories Table */}
//           <div className="overflow-x-auto">
//             <table className="min-w-full text-sm text-left border-collapse">
//               <thead className="bg-gray-100 text-gray-600">
//                 <tr>
//                   <th className="px-4 py-2">Photo</th>
//                   <th className="px-4 py-2">Name</th>
//                   <th className="px-4 py-2">Description</th>
//                   <th className="px-4 py-2 text-center">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredCategories.map((category) => (
//                   <tr key={category.id} className="border-t hover:bg-gray-50 transition-all">
//                     <td className="px-4 py-2">
//                       <img src={category.photo} alt={category.name} className="w-16 h-16 object-cover" />
//                     </td>
//                     <td className="px-4 py-2">{category.name}</td>
//                     <td className="px-4 py-2">{category.description}</td>
//                     <td className="px-4 py-2 flex justify-center gap-2">
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         className="text-blue-600 border-blue-600 hover:bg-blue-100 flex items-center gap-1"
//                         onClick={() => handleEdit(category.id)}
//                       >
//                         <FaEdit />
//                       </Button>
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         className="text-red-600 border-red-600 hover:bg-red-100 flex items-center gap-1"
//                         onClick={() => handleDelete(category.id)}
//                       >
//                         <FaTrash />
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//                 {filteredCategories.length === 0 && (
//                   <tr>
//                     <td colSpan="4" className="text-center py-6 text-gray-500">
//                       No categories found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default CategoriesPage;









import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios"; // Import axios pour les requêtes HTTP

const CategoriesPage = ({ newCategory }) => {
  const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState([]);

  // Récupérer les catégories depuis l'API Laravel
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:8000/categories");
        const loadedCategories = response.data.map((category) => ({
          id: category.id,
          name: category.name,
          description: category.description,
          photoURL: category.image ? `http://localhost:8000${category.image}` : "/images/default-category.jpg", // Gérer les images
        }));

        if (newCategory) {
          setCategories([...loadedCategories, newCategory]);
        } else {
          setCategories(loadedCategories);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des catégories :", error);
      }
    };

    fetchCategories();
  }, [newCategory]);

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-black">Catégories</h1>
        <Button
          variant="primary"
          size="sm"
          className="bg-[#0f3556] text-white hover:bg-[#b89e65] transition"
        >
          + Ajouter une Catégorie
        </Button>
      </div>

      <Card className="shadow-lg rounded-lg mt-4">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <Input
              placeholder="Rechercher une catégorie"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full sm:max-w-sm"
            />
          </div>

          {/* Categories Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border-collapse">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="px-4 py-2">Photo</th>
                  <th className="px-4 py-2">Nom</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCategories.map((category) => (
                  <tr key={category.id} className="border-t hover:bg-gray-50 transition-all">
                    <td className="px-4 py-2">
                      <img
                        src={category.photoURL} // Utilise la photoURL corrigée
                        alt={category.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="px-4 py-2">{category.name}</td>
                    <td className="px-4 py-2">{category.description}</td>
                    <td className="px-4 py-2 flex justify-center gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-100">Delete</Button>
                    </td>
                  </tr>
                ))}
                {filteredCategories.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center py-6 text-gray-500">
                      Aucune catégorie trouvée.
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

export default CategoriesPage;

