import React from 'react';

const BusinessForm = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center"
         style={{ backgroundImage: 'url("/images/formbuss.jpg")' }}>
      <form className="bg-black bg-opacity-60 p-6 md:p-10 rounded-md w-full max-w-md text-white space-y-4">
        <h1 className="text-3xl font-light text-center">
          Your <span className="text-yellow-300 font-medium">Compass</span>
        </h1>
        <h2 className="text-xl font-semibold text-center">Add your business</h2>

        <div>
          <label className="block text-sm">business name</label>
          <input type="text" className="w-full p-2 rounded bg-white text-black" placeholder="Enter business name" />
        </div>

        <div>
          <label className="block text-sm">Select category</label>
          <select className="w-full p-2 rounded bg-white text-black">
            <option value="">-- Select --</option>
            <option>Restaurant</option>
            <option>Shop</option>
          </select>
        </div>

        <div>
          <label className="block text-sm">business Description</label>
          <textarea className="w-full p-2 rounded bg-white text-black" placeholder="Description" rows="3" />
        </div>

        <div>
          <label className="block text-sm">business Picture</label>
          <input type="file" className="w-full p-1 bg-white text-black" />
        </div>

        <div>
          <label className="block text-sm">Address</label>
          <input type="text" className="w-full p-2 rounded bg-white text-black mb-2" placeholder="Street address" />
          <div className="flex space-x-2">
            <input type="text" className="w-1/2 p-2 rounded bg-white text-black" placeholder="City" />
            <select className="w-1/2 p-2 rounded bg-white text-black">
              <option>Morocco</option>
              <option>France</option>
              <option>USA</option>
            </select>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mt-4">business Contact</h3>
          <input type="email" className="w-full p-2 rounded bg-white text-black mb-2" placeholder="Address Email" />
          <input type="tel" className="w-full p-2 rounded bg-white text-black" placeholder="Phone number" />
        </div>

        <div>
          <h3 className="font-semibold mt-4">Manager contact</h3>
          <input type="email" className="w-full p-2 rounded bg-white text-black mb-2" placeholder="Email" />
          <input type="tel" className="w-full p-2 rounded bg-white text-black" placeholder="Mobile" />
        </div>

        <div className="flex justify-between mt-6">
          <button type="reset" className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BusinessForm;
