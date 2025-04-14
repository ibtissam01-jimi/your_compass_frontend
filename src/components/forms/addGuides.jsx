import React from 'react';

const ProfileForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form className="bg-white p-6 w-full max-w-sm space-y-4 border border-gray-200 rounded shadow-sm">
        <h2 className="text-center text-lg text-gray-500 font-medium mb-4">Add your Profile</h2>

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
            className="w-full text-sm cv"
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
        <div className="flex justify-between pt-2">
          <button
            type="reset"
            className="text-sm px-4 py-2 text-gray-500 border border-gray-200 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-sm px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
