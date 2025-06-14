// src/components/ContactSection.jsx
import { motion } from "framer-motion";
import React, { useState } from "react";
import { fadeUpVariant } from "../animations/scrollVariants";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";



const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("📨 Message sent! (Just UI for now)");
  };

  return (
    <section id="contact" className="bg-white py-16 px-6 md:px-12">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-pink-700 mb-6">Get in Touch</h3>
        <p className="text-gray-600 mb-10">
          Have a question, feedback or just want to say hi? Reach out below 💌
        </p>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Info */}
          <div className="flex-1 space-y-6 text-left">
          <div className="flex items-center gap-3 text-pink-700">
  <MailIcon /> <span>glowup@studio.com</span>
</div>
<div className="flex items-center gap-3 text-pink-700">
  <PhoneIcon /> <span>+91 98765 43210</span>
</div>
<div className="flex items-center gap-3 text-pink-700">
  <MapPinIcon /> <span>123 Glow Street, Mumbai</span>
</div>

          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 bg-pink-50 p-6 rounded-xl shadow-md space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 rounded-md border"
            />
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-3 rounded-full hover:bg-pink-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
