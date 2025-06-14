// src/components/ServicesSection.jsx
import { motion } from "framer-motion";
import React from "react";

const services = [
  {
    title: "Hair Styling",
    price: "₹899",
    img: "https://plus.unsplash.com/premium_photo-1661668935701-2429eb4da878?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGFpciUyMFN0eWxpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Bridal Makeup",
    price: "₹4999",
    img: "https://media.istockphoto.com/id/1336649728/photo/beautiful-traditional-indian-bride-getting-ready-for-her-wedding-day-by-makeup-artist.webp?a=1&b=1&s=612x612&w=0&k=20&c=t2hJwSM7oSHz9BkmBiqAf18ktvwy4lCT5W22fOLMmN0=",
  },
  {
    title: "Facial Treatment",
    price: "₹1199",
    img: "https://images.unsplash.com/photo-1684014286330-ddbeb4a40c92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RmFjaWFsJTIwVHJlYXRtZW50fGVufDB8fDB8fHww",
  },
  {
    title: "Manicure & Pedicure",
    price: "₹799",
    img: "https://plus.unsplash.com/premium_photo-1661576485868-25958a5f4ae6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fE1hbmljdXJlJTIwJTI2JTIwUGVkaWN1cmV8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Hair Spa",
    price: "₹999",
    img: "https://plus.unsplash.com/premium_photo-1667516650977-b6fb6e3a5a5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEhhaXIlMjBTcGF8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Makeover Package",
    price: "₹3499",
    img: "https://images.unsplash.com/photo-1676570092589-a6c09ecbb373?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE1ha2VvdmVyJTIwUGFja2FnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-pink-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-pink-700 mb-12">Our Services</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5 space-y-3">
                <h4 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h4>
                <p className="text-pink-600 font-medium">{service.price}</p>
                <a
                  href="#book"
                  className="inline-block mt-2 bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
