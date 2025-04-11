import React, { useState } from 'react';

const HeroSection = () => {
  const videos = [
    'https://video-previews.elements.envatousercontent.com/a0a45dfb-8e48-4c21-943d-12d010d78d71/watermarked_preview/watermarked_preview.mp4',
    'https://video-previews.elements.envatousercontent.com/a0a45dfb-8e48-4c21-943d-12d010d78d71/watermarked_preview/watermarked_preview.mp4',
    'https://video-previews.elements.envatousercontent.com/a0a45dfb-8e48-4c21-943d-12d010d78d71/watermarked_preview/watermarked_preview.mp4'
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoChange = (index) => {
    setCurrentVideo(index);
  };

  return (
    <div className="relative text-center text-white">
      <video
        className="w-full h-auto object-cover mt-10"
        key={currentVideo}
        autoPlay
        loop
        muted
        controls={false}
      >
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl">
        {/* Replace with your heading text */}
        <h1>Your Heading</h1>
      </div>
      <div className="absolute top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl">
        {/* Replace with your paragraph text */}
        <p>Your paragraph text here.</p>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
        {videos.map((_, index) => (
          <span
            key={index}
            className={`w-4 h-4 bg-white rounded-full cursor-pointer opacity-50 ${currentVideo === index ? 'bg-gray-800 opacity-100' : ''}`}
            onClick={() => handleVideoChange(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
