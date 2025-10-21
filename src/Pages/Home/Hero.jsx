import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <div className="relative bg-gray-100">
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-4" data-aos="fade-down">
          Your Trusted Partner for Home & Office Maintenance
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8" data-aos="fade-up">
          Welcome to Kaamlay.com, Pakistan’s first membership-based professional maintenance company dedicated to simplifying your everyday life.
        </p>
        <div className="flex justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
          <ScrollLink
            to="services-section" // This ID will be on the services section below
            smooth={true}
            duration={500}
            offset={-80} // Adjust offset for fixed navbar
            className="bg-primary cursor-pointer text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-transform transform hover:scale-105"
          >
            Our Services
          </ScrollLink>
          <RouterLink
            to="/contact"
            className="bg-white text-primary border-2 border-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-50 transition-transform transform hover:scale-105"
          >
            Contact Us
          </RouterLink>
        </div>
      </div>
    </div>
  );
}

export default Hero;