'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        { text: "Masterpiece FX has revolutionized my trading experience!", name: "Raji Roqeeb" },
        { text: "The analytics are incredibly detailed and easy to understand.", name: " Smith" },
        { text: "Their support is top-notch and always available.", name: "David" },
    ];

    return ( 
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
    );
};

export default Testimonials;
