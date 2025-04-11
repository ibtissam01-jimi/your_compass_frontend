import React, { useState } from 'react';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';
import image11 from '../assets/image11.jpg';
import image12 from '../assets/image12.jpg';
import image13 from '../assets/image13.jpg';
import image14 from '../assets/image14.jpg';
import image15 from '../assets/image15.jpg';
import image16 from '../assets/image16.jpg';
import image17 from '../assets/image17.jpg';
import image18 from '../assets/image18.jpg';
import image19 from '../assets/image19.jpg';
import image20 from '../assets/image20.jpg';

const images = [
  image1, image2, image3, image4, image5,
  image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15,
  image16, image17, image18, image19, image20
];

const ImageCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');
  const imagesToShow = 4;

  const handleNext = () => {
    setAnimationClass('carousel-images-exit');
    setTimeout(() => {
      setStartIndex((prevIndex) => (prevIndex + imagesToShow) % images.length);
      setAnimationClass('carousel-images-enter');
    }, 500);
  };

  const handlePrev = () => {
    setAnimationClass('carousel-images-exit');
    setTimeout(() => {
      setStartIndex((prevIndex) => (prevIndex - imagesToShow + images.length) % images.length);
      setAnimationClass('carousel-images-enter');
    }, 500);
  };

  const displayedImages = images.slice(startIndex, startIndex + imagesToShow);

  return (
    <div className="relative flex justify-center items-center mt-8">
      <button onClick={handlePrev} className="carousel-arrow left absolute top-1/2 transform -translate-y-1/2 bg-brown-600 text-white p-2 rounded-full cursor-pointer text-xl hover:bg-gray-700 hover:scale-110 transition-all">
        &lt;
      </button>
      <div className={`carousel-images flex overflow-hidden w-[850px] relative ${animationClass}`}>
        {displayedImages.map((image, index) => (
          <img key={index} src={image} alt={`Image ${startIndex + index + 1}`} className="carousel-image w-[170px] rounded-lg shadow-lg mx-2 transition-all hover:scale-110 hover:shadow-xl" />
        ))}
      </div>
      <button onClick={handleNext} className="carousel-arrow right absolute top-1/2 transform -translate-y-1/2 bg-brown-600 text-white p-2 rounded-full cursor-pointer text-xl hover:bg-gray-700 hover:scale-110 transition-all">
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
