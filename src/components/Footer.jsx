import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-pink-700 text-white py-12 px-6 md:px-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* About / Logo */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Farah's Cakery</h2>
                    <p className="text-gray-200">
                        Handmade cakes, cookies, and pastries by an AIUB student with a heart for baking. Bringing sweetness into your day, one slice at a time. 😊
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-pink-300 transition-colors">Home</Link></li>
                        <li><Link to="/menu" className="hover:text-pink-300 transition-colors">Menu</Link></li>
                        <li>< Link to="/about" className="hover:text-pink-300 transition-colors">About</Link></li>
                        <li>< Link to="/contact" className="hover:text-pink-300 transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Contact</h2>
                    <p className="flex items-center gap-2">📍 123 Bakery Street, Dhaka, Bangladesh</p>
                    <p className="flex items-center gap-2">📞 +880 1234 567 890</p>
                    <p className="flex items-center gap-2">✉️ farahcakery@example.com</p>
                    <div className="flex gap-4 mt-4">
                        <a href="https://www.facebook.com/farahcakery" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition-colors">📘</a>
                        <a href="#" className="hover:text-pink-300 transition-colors">🐦</a>
                        <a href="#" className="hover:text-pink-300 transition-colors">📸</a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-12 text-gray-300">
                &copy; {new Date().getFullYear()} Farah's Cakery. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
