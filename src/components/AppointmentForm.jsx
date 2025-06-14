
import { motion } from "framer-motion";
import React, { useState } from "react";
import { fadeUpVariant } from "../animations/scrollVariants";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Appointment Booked! (Just UI for now)");
    // You can later connect this to backend or Google Sheets
  };

  return (
    <section id="book" className="bg-white py-16 px-6 md:px-12">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-pink-700 mb-6">
          Book an Appointment
        </h3>
        <p className="text-gray-600 mb-10">
          Choose your service and preferred time. We'll take care of the rest
          💇‍♀️✨
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-pink-50 p-8 rounded-xl shadow-md space-y-6 text-left"
        >
          <div className="flex flex-col md:flex-row gap-6">
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
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border"
            />

            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border bg-white"
            >
              <option value="">Select Service</option>
              <option>Hair Styling</option>
              <option>Bridal Makeup</option>
              <option>Facial Treatment</option>
              <option>Hair Spa</option>
              <option>Manicure & Pedicure</option>
              <option>Makeover Package</option>
            </select>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border"
            />
            <input
              type="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-full hover:bg-pink-700 transition"
          >
            Book Now
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default AppointmentForm;
