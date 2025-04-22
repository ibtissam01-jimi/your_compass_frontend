import React from 'react';

const AddGuide = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center mt-20" 
         style={{ backgroundImage: "url('images/guide.jpg')" }}>
      {/* التدرج المظلل لجعل الصورة أغمق */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* المحتوى الرئيسي فوق الخلفية */}
      <div className="relative text-center text-white px-6 max-w-2xl">
        <p className="text-sm uppercase tracking-wide text-yellow-400 mb-2">
          Add your details to become a part of our network of tour guides to start connecting with travelers!
        </p>
        <h1 className="text-4xl font-bold italic mb-4">
          Tour Guide
        </h1>
        <p className="text-lg mb-6">
          Add your details to become a part of our network of tour guides to start connecting with travelers!
        </p>
        <button className="bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-md 
                           hover:bg-yellow-600 transition duration-300">
          Add Profile
        </button>
      </div>
    </div>
  );
};

export default AddGuide;
