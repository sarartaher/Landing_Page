import React from 'react';
import {Link} from 'react-router-dom'

const LogIn = () => {

    return (
        <section className="min-h-screen flex items-center justify-center bg-pink-50 px-6">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center text-pink-700 mb-6">Log In</h2>

                <form className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-pink-600 text-white font-semibold py-2 rounded-lg hover:bg-pink-700 transition-colors mt-2"
                    >
                        Log In
                    </button>

                    <p className="text-center text-gray-500 mt-4">
                        Don't have an account? <Link to="/signup" className="text-pink-600 hover:underline">Sign Up</Link>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default LogIn;
