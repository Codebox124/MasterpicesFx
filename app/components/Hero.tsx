'use client'
import React from 'react';
import { motion } from 'framer-motion';

// Define the Hero component
const Hero = () => {
    // Create a ref for the CTA component


    // Function to scroll to the CTA component
   
    return (
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
    );
};

export default Hero;
