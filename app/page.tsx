'use client'

import { motion } from "framer-motion";
import { FaChartLine, FaHeadset, FaUserFriends } from "react-icons/fa";


export default function Home() {
  const testimonials = [
    { text: "Masterpiece FX has revolutionized my trading experience!", name: "Raji Roqeeb" },
    { text: "The analytics are incredibly detailed and easy to understand.", name: " Smith" },
    { text: "Their support is top-notch and always available.", name: "David" },
  ];
  return (
    <>
      <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 bg-cover bg-center text-white py-40 text-center flex flex-col items-center justify-center min-h-screen">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-75"></div>
        {/* Content */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold relative z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Experience Masterpiece FX
        </motion.h1>
        <motion.p
          className="text-2xl mt-4 md:mt-6 md:text-3xl relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Transform your trading with advanced forex tools.
        </motion.p>
        {/* Button with onClick event to scroll to the CTA */}
        <motion.button
          className="mt-6 md:mt-8 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded relative z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}

        >
          Get Started
        </motion.button>

      </div>
      <div className="py-20 text-center px-3  bg-gradient-to-r from-blue-500 to-purple-600">
        <h2 className="text-3xl font-bold text-white">Features</h2>
        <div className="mt-6 grid grid-cols-1 text-blue-500 gap-8 md:grid-cols-3">
          <div className="feature-item bg-white p-6 rounded-lg shadow-lg">
            <FaChartLine className="mx-auto text-4xl text-green-500" />
            <p className="mt-2 text-lg">Detailed Analytics</p>
          </div>
          <div className="feature-item bg-white p-6 rounded-lg shadow-lg">
            <FaUserFriends className="mx-auto text-4xl text-green-500" />
            <p className="mt-2 text-lg">User-friendly Interface</p>
          </div>
          <div className="feature-item bg-white p-6 rounded-lg shadow-lg">
            <FaHeadset className="mx-auto text-4xl text-green-500" />
            <p className="mt-2 text-lg">24/7 Support</p>
          </div>
        </div>
      </div>
      <div className="py-20 text-center  bg-gradient-to-r from-blue-500 to-purple-600">
        <h2 className="text-3xl font-bold">What Our Users Say</h2>
        <div className="mt-6 space-y-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-item"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p>"{testimonial.text}"</p>
              <p className="mt-2 font-semibold">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold">Join Us Today</h2>
        <a href="https://chat.whatsapp.com/CZArIukdhhJI6StWYZAng4" target="_blank" rel="noopener noreferrer">
          <motion.button
            className="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Whatsapp
          </motion.button>
        </a>
      </div>
    </>
  );
}
