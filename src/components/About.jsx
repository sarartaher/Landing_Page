import React from 'react';

const About = () => {
    return (
        <section className="about bg-gradient-to-b from-pink-50 to-rose-100 py-16">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-20 gap-12">

                {/* Image Section (goes below text on small screens) */}
                <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
                    <img
                        src="/home-about.jpg"
                        alt="Farah baking"
                        className="rounded-2xl shadow-xl w-full sm:w-[90%] md:w-[85%] max-h-[600px] object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 text-gray-800 order-1 md:order-2">
                    <h1 className="text-4xl font-extrabold text-center md:text-left text-pink-700 mb-6">
                        About Us
                    </h1>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Welcome to <span className="font-semibold text-pink-600">Farah's Cakery</span> — home of
                        fresh, handmade treats by an AIUB student with a heart for baking.
                    </p>
                    <p className="text-lg leading-relaxed mt-4 text-gray-700">
                        I’m <span className="font-semibold text-pink-600">Farah Ibnat</span>, a passionate AIUB
                        student. Baking is my creative escape — what began as a hobby has become a dream I now
                        share with all of you.
                    </p>
                    <p className="text-lg leading-relaxed mt-4 text-gray-700">
                        Every cookie, cake, and pastry is made with care because I believe good food brings
                        people together. Between studies and assignments, I’m here to serve you with:
                    </p>

                    <ul className="list-disc list-inside text-gray-700 text-lg mt-4 space-y-2">
                        <li>Delightful cakes made with love 🍰</li>
                        <li>Freshly baked cookies, cupcakes, and pastries 🧁</li>
                        <li>Custom orders for birthdays, events, and gatherings 🎉</li>
                    </ul>

                    <p className="text-lg leading-relaxed mt-4 text-gray-700">
                        I keep everything simple and honest — no shortcuts, only real ingredients and big dreams.
                        Every order, every smile, every review means the world to me. 💖
                    </p>

                    <p className="text-lg italic text-gray-700 mt-6">
                        Let’s bring sweetness into your day, one slice at a time.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
