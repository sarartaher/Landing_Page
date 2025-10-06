import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
    return (

        <div className='layout'>
            <Navbar />
            <main className="main">
                <Outlet/>
            </main>
            <Footer/>
        </div>


    )
}
export default MainLayout
