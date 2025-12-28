// components/BlurBlob.jsx
import React from 'react';
import PropTypes from 'prop-types';

const BlurBlob = ({ position, size }) => {
  // Destructure position and size with default values
  const { top, left } = position
  const { width, height } = size 

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
    <div
      className="absolute"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob"
      ></div>
    </div>
    </section>
  );
};

// Define prop types
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;
