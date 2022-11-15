import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slidder from '../components/Slidder'
import Login from './Login'
import Register from './Register'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Announcement />
            <Slidder />
            <Categories />
            <Products />
            <Newsletter />
            <Login />
            <Register />
            <Footer />
        </div>
    )
}

export default Home
