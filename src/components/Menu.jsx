import React from 'react'
import ProductCard from "./ProductCard.jsx";

const Menu = () => {
    const products = [
        {
            name: "Chocolate Cake",
            description: "Rich and creamy chocolate cake topped with chocolate ganache.",
            price: 750,
            image: "Choclet_Cake.jpg",
        },
        {
            name: "Vanilla Cake",
            description: "Soft vanilla cupcakes with buttercream frosting.",
            price: 700,
            image: "Vanila_Cake.jpg",
        },
        {
            name: "Strawberry Barbie Cake",
            description: "Fresh strawberries on a crispy tart base.",
            price: 800,
            image: "Straberry_Barbie_Cake.jpg",
        },
        {
            name: "Lemon Pound Cake",
            description: "Moist pound cake with a hint of lemon zest.",
            price: 830,
            image: "lemon_pound_cake.jpg",
        },
        {
            name: "Blueberry Muffin",
            description: "Fluffy muffins packed with juicy blueberries.",
            price: 600,
            image: "Blueberry_Cake.jpg",
        },
        {
            name: "Cinnamon Cake",
            description: "Soft rolls with a cinnamon-sugar filling.",
            price: 800,
            image: "Cinemon_cake.jpg",
        },
    ];


    return (
        <section className='Menu bg-amber-50 py-4 px-15 '>
            <h1 className='text-6xl text-center py-10 font-semibold italic text-pink-700'>Menu</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 '>
                {products.map((product, index) => (
                    <ProductCard key={index}
                                 name={product.name}
                                 description={product.description}
                                 price={product.price}
                                 image={product.image}/>
                ))}
            </div>


        </section>

    )
}
export default Menu
