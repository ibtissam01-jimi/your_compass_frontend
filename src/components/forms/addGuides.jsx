import React from 'react';
import { Link } from "react-router-dom";

const ProfileForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form className="bg-white p-6 w-full max-w-3xl space-y-4 border border-gray-200 rounded shadow-sm">
        <h2 className="text-center text-lg text-[##c5a76f ]-500 font-medium mb-4"  style={{ color: '#c5a76f' }}>Add your Profile</h2>

        {/* First Name */}
        <div>
          <label className="block text-sm text-gray-700">First Name</label>
          <input
            type="text"
            placeholder="first name"
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm text-gray-700">Last Name</label>
          <input
            type="text"
            placeholder="last name"
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
        </div>

        {/* Date of Birthday */}
        <div>
          <label className="block text-sm text-gray-700">Date of Birthday</label>
          <input
            type="text"
            placeholder="DD/MM/YY"
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-sm text-gray-700">Email Adress</label>
          <input
            type="email"
            placeholder="your email"
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
        </div>

        {/* Number Phone */}
        <div>
          <label className="block text-sm text-gray-700">Number Phone</label>
          <input
            type="tel"
            placeholder="number Phone"
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm text-gray-700">Adress</label>
          <input
            type="text"
            placeholder="Your adress"
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
        </div>

        {/* CV Upload */}
        <div>
          <label className="block text-sm text-gray-700">Personal CV :</label>
          <input
            type="file"
            className="w-full h-12 p-2 bg-[#D9D9D9] text-sm border border-gray-300 rounded file:bg-transparent file:text-black file:border-none file:cursor-pointer"
          />
        </div>

        {/* Experiences */}
        <div>
          <label className="block text-sm text-gray-700">Experiences</label>
          <textarea
            placeholder="About You"
            rows="2"
            className="w-full p-2 border border-gray-300 rounded text-sm"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-between pt-2 space-x-2">
          <Link to="/your-cancel-destination"  className="w-1/2 text-xs px-2 py-1 text-gray-500 border border-gray-200 rounded shadow-lg hover:bg-gray-100 cancel_buss">

            <button
              type="reset"
              className="w-1/2 text-xs px-2 py-1 text-gray-500 border border-gray-200 rounded shadow-lg hover:bg-gray-100 cancel_buss"
            >
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            className="w-1/2 text-xs px-2 py-1 bg-yellow-600 text-white rounded shadow-lg hover:bg-yellow-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
