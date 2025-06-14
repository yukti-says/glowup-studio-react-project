import { motion } from "framer-motion";
import React from "react";
import {
  fadeLeftVariant,
  fadeRightVariant,
} from "../animations/scrollVariants";


const About = () => {
  return (
    <section id="about" className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <img
            src="https://images.unsplash.com/photo-1633681926035-ec1ac984418a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhbG9ufGVufDB8fDB8fHww"
            alt="Founder"
            className="rounded-xl shadow-xl w-full"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-6"
        >
          <h3 className="text-3xl font-bold text-pink-700">Our Story</h3>
          <p className="text-gray-700 text-lg">
            GlowUp Studio was founded with a dream — to make every person feel
            beautiful in their own skin. Our founder, Meera Sharma, started with
            a small room and a big vision: to create a space of transformation,
            self-care, and confidence.
          </p>
          <p className="text-gray-600">
            Today, we are proud to serve hundreds of happy clients with
            world-class products, trained professionals, and personalized care.
            Whether it’s a special occasion or a self-love treat, we’re here for
            your glow-up journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
