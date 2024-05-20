import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReusableSlider = ({ images, settings }) => {
  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={image.src}
            alt={image.alt}
            layout="responsive"
            width={500}
            height={300} 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ReusableSlider;
