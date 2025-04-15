import React from "react";

function AddSubmission() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg space-y-6">
      {/* Images en haut */}
      <div className="grid grid-cols-5 gap-2 rounded overflow-hidden">
        {["pict.png", "pict2.jpg", "merr.png", "sah.jpeg", "tanger.png"].map((src, i) => (
          <div key={i} className="h-24 w-full">
            <img
              src={src}
              alt={`Preview ${i + 1}`}
              className="w-full h-full object-cover rounded"
            />
          </div>
        ))}
      </div>

      {/* Formulaire */}
      <form className="space-y-4">
        {/* Nom */}
        <div>
          <label className="block font-medium mb-1 text-black">Name *</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue="Voyage Sorgun"
          />
        </div>

        {/* Type */}
        <div>
          <label className="block font-medium mb-1 text-black">Type *</label>
          <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Hotels</option>
            <option>Restaurants</option>
            <option>Rentals</option>
          </select>
        </div>

        {/* Pays */}
        <div>
          <label className="block font-medium mb-1 text-black">Country *</label>
          <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Turkey</option>
          </select>
        </div>

        {/* Ville */}
        <div>
          <label className="block font-medium mb-1 text-black">City *</label>
          <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Manavgat</option>
          </select>
        </div>

        {/* Téléphone */}
        <div>
          <label className="block font-medium mb-1 text-black">Phone Number *</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue="00 90 242 756 93 00"
          />
        </div>

        {/* Adresse */}
        <div>
          <label className="block font-medium mb-1 text-black">Adresse *</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue="Titreyengöl Mevkii Manavgat Sorgun Yörük"
          />
        </div>

        {/* Website */}
        <div>
          <label className="block font-medium mb-1 text-black">Website *</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue="Quick View"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1 text-black">Email *</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue="BusinessName0004@BusinessName.com"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1 text-black">Description *</label>
          <textarea
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            defaultValue={`This recently opened Voyage Sorgun Hotel is a five stars which means, an exclusive offer for only few hotels per area. With a relaxing pool and spa area, wonderful ambiance in its luxurious garden rooms and villas. It also comes with restaurant, cocktail bar, tennis court and theatre. All that makes it a top destination. It offers direct beach access and a mini club plus a playroom for the younger generation.`}
          />
        </div>

        {/* Boutons */}
        <div className="flex justify-between mt-4">
          <button
            type="button"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Rejeter
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Valider
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddSubmission;
