import React from 'react'
import Hero from '../components/Hero.jsx'
import About from "../components/About.jsx";
import Menu from "../components/Menu.jsx";
import Contact from "../components/Contact.jsx";

const Home = () => {
    return (
       <>
           <Hero/>
           <About/>
           <Menu/>
           <Contact/>
       </>

    )
}
export default Home
