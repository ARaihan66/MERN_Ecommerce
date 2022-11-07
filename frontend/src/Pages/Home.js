import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slidder from '../components/Slidder'

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slidder />
            <Categories />
            <Products />
        </div>
    )
}

export default Home
