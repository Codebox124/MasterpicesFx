'use client'
import React from 'react';
import { FaChartLine, FaUserFriends, FaHeadset } from 'react-icons/fa';

const Features = () => {
    return (
        <div className="py-20 text-center px-3  bg-gradient-to-r from-blue-500 to-purple-600">
            <h2 className="text-3xl font-bold text-white">Features</h2>
            <div className="mt-6 grid grid-cols-1 text-blue-500 gap-8 md:grid-cols-3">
                <div className="feature-item bg-white p-6 rounded-lg shadow-lg">
                    <FaChartLine className="mx-auto text-4xl text-green-500"/>
                    <p className="mt-2 text-lg">Detailed Analytics</p>
                </div>
                <div className="feature-item bg-white p-6 rounded-lg shadow-lg">
                    <FaUserFriends className="mx-auto text-4xl text-green-500"/>
                    <p className="mt-2 text-lg">User-friendly Interface</p>
                </div>
                <div className="feature-item bg-white p-6 rounded-lg shadow-lg">
                    <FaHeadset className="mx-auto text-4xl text-green-500"/>
                    <p className="mt-2 text-lg">24/7 Support</p>
                </div>
            </div>
        </div>
    );
};

export default Features;
