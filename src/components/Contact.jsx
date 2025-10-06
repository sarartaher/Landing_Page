import React from "react";

const Contact = () => {
    return (
        <section className="contact bg-pink-50 py-16 px-6 md:px-20">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-pink-700 mb-12">
                    Contact Us
                </h1>

                <div className="flex flex-col md:flex-row gap-10">

                    {/* Contact Info */}
                    <div className="md:w-1/2 flex flex-col gap-6">
                        <h2 className="text-2xl font-semibold text-pink-600">Get in Touch</h2>
                        <p className="text-gray-700">
                            Have a question or want to place a custom order? Reach out to us and we’ll respond as soon as possible!
                        </p>
                        <div className="space-y-3">
                            <p className="flex items-center gap-2 text-gray-700">
                                <span>📍</span> Mirpur-12 Pallabi, Dhaka, Bangladesh
                            </p>
                            <p className="flex items-center gap-2 text-gray-700">
                                <span>📞</span> +880 1234 567 890
                            </p>
                            <p className="flex items-center gap-2 text-gray-700">
                                <span>✉️</span> farahcakery@example.com
                            </p>
                            <p className="flex items-center gap-2 text-gray-700">
                                <span>🌐</span> <a href="https://www.facebook.com/profile.php?id=61560191990708" className="text-pink-600 underline">Facebook Page</a>
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="md:w-1/2 bg-white p-6 rounded-2xl shadow-lg">
                        <form className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows="4"
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
