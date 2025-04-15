import React from 'react';
import { Link } from "react-router-dom";

const BusinessForm = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/formbuss.jpg")',
      }}
    >
      <form
        className="bg-[#1B1F26] bg-opacity-0 p-8 md:p-12 rounded-lg w-full max-w-3xl text-white space-y-6"
        style={{
          backgroundColor: 'rgba(29, 35, 39, 0.6)', 
        }}
      >
        <h1
          className="text-4xl font-light text-center"
          style={{
            fontFamily: "'Beau Rivage', cursive",
            color: '#FFFFFF',
            fontSize: '2.6rem',
          }}
        >
          Your{' '}
          <span
            className="font-medium"
            style={{
              fontFamily: "'Beau Rivage', cursive",
              color: '#F8DDAC',
              fontSize: '2.6rem',
            }}
          >
            Compass
          </span>
        </h1>
        <h2 className="text-xl font-semibold text-center">Add your business</h2>

        {/* Business Name */}
        <div>
          <label className="block text-sm capitalize">Business Name</label>
          <input
            type="text"
            className="w-full p-2 rounded border border-gray-400 bg-transparent text-white"
            placeholder="Enter business name"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm capitalize">Select Category</label>
          <select
            className="w-full p-2 rounded border border-gray-400 bg-transparent text-white"
          >
            <option value="">-- Select --</option>
            <option>Restaurant</option>
            <option>Shop</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm capitalize">Business Description</label>
          <textarea
            className="w-full p-2 rounded border border-gray-400 bg-transparent text-white"
            placeholder="Description"
            rows="3"
          ></textarea>
        </div>

        {/* Business Picture */}
        <div>
          <label className="block text-sm capitalize">Business Picture</label>
          <input
            type="file"
            className="w-full p-2 rounded bg-transparent text-white"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm capitalize">Address</label>
          <input
            type="text"
            className="w-full p-2 rounded mb-2 border border-gray-400 bg-transparent text-white"
            placeholder="Street address"
          />
          <div className="flex space-x-2">
            <input
              type="text"
              className="w-1/2 p-2 rounded border border-gray-400 bg-transparent text-white"
              placeholder="City"
            />
            <select className="w-1/2 p-2 rounded border border-gray-400 bg-transparent text-white">
              <option>Morocco</option>
              <option>France</option>
              <option>USA</option>
            </select>
          </div>
        </div>

        {/* Business Contact */}
        <div>
          <h3 className="font-semibold mt-4 capitalize">Business Contact</h3>
          <input
            type="email"
            className="w-full p-2 rounded mb-2 border border-gray-400 bg-transparent text-white"
            placeholder="Email Address"
          />
          <input
            type="tel"
            className="w-full p-2 rounded border border-gray-400 bg-transparent text-white"
            placeholder="Phone number"
          />
        </div>

        {/* Manager Contact */}
        <div>
          <h3 className="font-semibold mt-4 capitalize">Manager Contact</h3>
          <input
            type="email"
            className="w-full p-2 rounded mb-2 border border-gray-400 bg-transparent text-white"
            placeholder="Email"
          />
          <input
            type="tel"
            className="w-full p-2 rounded border border-gray-400 bg-transparent text-white"
            placeholder="Mobile"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          {/* Cancel button wrapped in a Link component */}
          <Link to="/your-cancel-destination" className="px-4 py-3 w-64 bg-white text-[#CAB284] rounded hover:bg-gray-200">
            Cancel
          </Link>
          {/* Submit button */}
          <button
            type="submit"
            className="px-4 py-3 w-64 bg-yellow-400 text-white rounded hover:bg-yellow-500"
          >
            Submit
          </button>
        </div>

      </form>
    </div>
  );
};

export default BusinessForm;
