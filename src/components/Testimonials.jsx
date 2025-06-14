// src/components/TestimonialsSection.jsx
import { motion } from "framer-motion";
import React from "react";
import { fadeUpVariant } from "../animations/scrollVariants";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    rating: 5,
    review:
      "Absolutely loved my bridal look! The team is so professional and kind. Highly recommend GlowUp Studio!",
  },
  {
    name: "Neha Verma",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4,
    review:
      "The facial treatment was so relaxing. I could feel the difference immediately after. Definitely coming back!",
  },
  {
    name: "Sneha Raj",
    image: "https://randomuser.me/api/portraits/women/85.jpg",
    rating: 5,
    review:
      "This place is magical! From hair styling to makeover, everything was top notch and budget-friendly.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-pink-50 py-16 px-6 md:px-12">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-pink-700 mb-12">
          What Our Clients Say
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((client, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <h4 className="font-semibold text-lg">{client.name}</h4>
                <p className="text-gray-600 text-sm">"{client.review}"</p>
                <div className="flex text-yellow-400">
                  {Array(client.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
