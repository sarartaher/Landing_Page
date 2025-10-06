import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="bg-pink-300 text-white shadow-md">
                <div className="min-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className='flex justify-between h-16 items-center'>
                        <div className="flex items-center space-x-2  ">
                            <img className='h-12 object-cover rounded-full' src="/Logo.jpg" alt='logo'/>
                            <p className='text-xl font-bold'>Farah's Bakery</p>
                        </div>
                        <div className='hidden md:flex md:align-center md:justify-center space-x-6'>
                            <Link to='/' className='hover:text-pink-200 transition font-bold'>Home</Link>
                            <Link to='/about' className='hover:text-pink-200 transition font-bold'>About</Link>
                            <Link to='/menu' className='hover:text-pink-200 transition font-bold'>Menu</Link>
                            <Link to='/contact' className='hover:text-pink-200 transition font-bold'>Contact</Link>
                            <Link to='/login' className='hover:text-pink-200 transition font-bold bg-pink-900 px-4 py-1 rounded-2xl'>Log In</Link>
                            <Link to='/signup' className='hover:text-pink-200 transition font-bold bg-pink-700 px-4 py-1 rounded-2xl'>Sign Up</Link>
                        </div>

                    </div>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar
