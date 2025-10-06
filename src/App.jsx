import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from "./Layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./components/About.jsx";
import Menu from "./components/Menu.jsx";
import Contact from "./components/Contact.jsx";
import LogIn from "./components/LogIn.jsx";
import SignUp from "./components/SignUp.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/signup" element={<SignUp/>} />
        </Route>
    )

)
const App = () => {
    return (

            <RouterProvider router={router}/>

    )
}
export default App
