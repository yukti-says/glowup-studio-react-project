// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-600">GlowUp Studio</h1>
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <a href="#home" className="hover:text-pink-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-pink-500">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-pink-500">
              Services
            </a>
          </li>
          <li>
            <a href="#book" className="hover:text-pink-500">
              Book
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-pink-500">
              Reviews
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-pink-500">
              Contact
            </a>
          </li>
        </ul>
        <a
          href="#book"
          className="hidden md:inline-block px-5 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
