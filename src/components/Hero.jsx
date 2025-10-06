import React from 'react'
import {useNavigate} from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    return (

        <>
            <section className='hero-section'>
                <div className='flex items-center justify-between'>
                    <div className='z-20 '>
                        <h1 className='lg:text-8xl sm:text-4xl  font-bold text-pink-400 ' >
                            Behind Every Wonderful Cake is A Baker With A Vision And A Heartfull Of Passion
                        </h1>
                        <div className='text-center lg:text-6xl sm:text-3xl my-5 text-white'>
                            <button onClick={()=> navigate('/menu')} className='z-20 cursor-pointer bg-pink-300 p-3 rounded-xl'>Order Now</button>
                        </div>

                    </div>
                </div>
            </section>

        </>

    )
}
export default Hero
