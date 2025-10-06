import React from 'react'

const ProductCard = ({name, description, price, image}) => {
    return (
        <section className='mx-auto'>
            <div className='rounded-2xl shadow-lg overflow-hidden sm:rounded-lg hover:shadow-2xl transition-shadow duration-300 w-[350px] '>
                <div className='w-full h-80 overflow-hidden'>
                    <img className='object-cover w-full h-full hover:scale-105 transition-transform duration-500' src={image} alt={name} />

                </div>
                <div className='p-6'>
                    <h2 className='text-2xl font-bold text-pink-700 mb-2'>{name}</h2>
                    <p className='text-gray-700 text-base mb-4'>{description}</p>
                    <div className='flex items-center justify-between'>
                        <span className='font-semibold text-gray-900 text-xl'>{price} Taka</span>
                        <button className='bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors duration-300'>
                            Order Now
                        </button>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default ProductCard
