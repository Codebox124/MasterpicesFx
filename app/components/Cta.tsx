
'use client'
import React from 'react';
import { motion } from 'framer-motion';

// Define the CTA component
const CTA = () => {
    return (
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
    );
};

// Export the CTA component
export default CTA;
