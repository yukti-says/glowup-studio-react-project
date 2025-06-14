// src/components/Footer.jsx
import React from "react";
import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-pink-800 py-10 px-6 md:px-12 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left */}
        <div className="text-center md:text-left space-y-2">
          <h4 className="text-xl font-bold">GlowUp Studio</h4>
          <p className="text-sm">Where beauty meets confidence ✨</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 text-pink-700">
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">
            <Instagram />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer">
            <Facebook />
          </a>
          <a href="mailto:glowup@studio.com">
            <Mail />
          </a>
        </div>

        {/* Credit */}
        <div className="text-sm text-center md:text-right">
          Built with 💖 by <span className="font-semibold">Yukti</span> ©{" "}
          {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
