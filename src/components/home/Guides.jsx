import React from 'react';

const TourGuides = () => {
  return (
    <div className="p-8 bg-white mt-24">
      <div className="mb">
        <h1 className="text-2xl font-bold mb-4 text-left text-black">Tour Guides</h1> {/* العنوان باللون الأسود */}
        <h2 className="text-lg mb-8 text-left text-black"> {/* النص باللون الأسود */}
          Connect with tourists and grow your business by joining our platform as a tour guide.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* بطاقة الدليل السياحي */}
        {[
          { name: "Guide Name 1", expertise: "Expertise Area 1", img: "images/gui1.jpeg" },
          { name: "Guide Name 2", expertise: "Expertise Area 2", img: "images/gui2.jpeg" },
          { name: "Guide Name 3", expertise: "Expertise Area 3", img: "images/gui3.jpeg" }
        ].map((guide, index) => (
          <div key={index} className="relative rounded-lg shadow-lg overflow-hidden group">
            {/* الصورة */}
            <img
              src={guide.img}
              alt={guide.name}
              className="w-full h-96 object-cover"
            />

            {/* النص على الصورة من الأسفل */}
            <div className="absolute inset-x-0 bottom-0 bg-black/50 flex justify-between items-center p-6">
              {/* النص من اليسار */}
              <div className="text-left text-white">
                <h3 className="text-xl font-bold">{guide.name}</h3>
                <p className="text-gray-300">{guide.expertise}</p>
              </div>

              {/* الزر على اليمين */}
              <div className="flex justify-end">
                <button className="seeMore-btn bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg shadow-md 
                                   hover:bg-yellow-600 transition duration-300">
                  See more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourGuides;
