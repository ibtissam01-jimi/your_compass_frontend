import React from "react";

const BusinessForm = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/formbuss.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex justify-center items-center h-full">
        <form className="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg max-w-md w-full text-white">
          <h2 className="text-center text-2xl font-semibold mb-4">Add your business</h2>
          
          <label className="block">Business Name</label>
          <input type="text" className="w-full p-2 mb-3 bg-transparent border-b border-gray-400 outline-none" />

          <label className="block">Select Category</label>
          <select className="w-full p-2 mb-3 bg-transparent border-b border-gray-400 outline-none">
            <option>Select category</option>
          </select>
          
          <label className="block">Business Description</label>
          <textarea className="w-full p-2 mb-3 bg-transparent border-b border-gray-400 outline-none"></textarea>
          
          <label className="block">Business Picture</label>
          <input type="file" className="w-full p-2 mb-3 bg-transparent border-b border-gray-400 outline-none" />
          
          <label className="block">Address</label>
          <input type="text" placeholder="Street address" className="w-full p-2 mb-3 bg-transparent border-b border-gray-400 outline-none" />
          
          <div className="flex justify-between">
            <input type="text" placeholder="City" className="w-1/2 p-2 mb-3 bg-transparent border-b border-gray-400 outline-none" />
            <select className="w-1/2 p-2 mb-3 bg-transparent border-b border-gray-400 outline-none">
              <option>Morocco</option>
            </select>
          </div>

          <h3 className="text-lg font-semibold mt-4">Business Contact</h3>
          <label className="block">Address Email</label>
          <input type="email" className="w-full p-2 mb-3 bg-transparent border-b border-gray-400 outline-none" />
          
          <label className="block">Business Phone Number</label>
          <input type="tel" className="w-full p-2 mb-3 bg-transparent border-b border-gray-400 outline-none" />
          
          <h3 className="text-lg font-semibold mt-4">Manager Contact</h3>
          <label className="block">Email</label>
          <input type="email" className="w-full p-2 mb-3 bg-transparent border-b border-gray-400 outline-none" />
          
          <label className="block">Mobile</label>
          <input type="tel" className="w-full p-2 mb-3 bg-transparent border-b border-gray-400 outline-none" />

          <div className="flex justify-between mt-4">
            <button type="button" className="px-6 py-2 border border-gray-300 text-gray-300 rounded-lg">Cancel</button>
            <button type="submit" className="px-6 py-2 bg-yellow-500 text-white rounded-lg">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusinessForm;
