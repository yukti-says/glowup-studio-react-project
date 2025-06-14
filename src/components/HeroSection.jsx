// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-center bg-pink-50 px-6 pt-24 md:pt-20"
    >
      {/* Left Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left md:w-1/2 space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-pink-700">
          Your Beauty, Our Passion
        </h2>
        <p className="text-gray-700 text-lg">
          Step into elegance. Let our professionals bring out your natural glow
          with care and style.
        </p>
        <a
          href="#book"
          className="inline-block bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition"
        >
          Book Appointment
        </a>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="md:w-1/2 mt-10 md:mt-0"
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1664301489002-2fed4596c101?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2Fsb258ZW58MHx8MHx8fDA%3D"
          alt="Beauty Salon"
          className="rounded-lg shadow-lg w-full max-w-xl mx-auto"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
