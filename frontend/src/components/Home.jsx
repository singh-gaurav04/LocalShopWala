import React from 'react'
import FileAnnoncement from './Home/FileAnnouncement'
import { motion } from 'framer-motion'
import ShopList from './ShopList'
import  Category  from './Home/Category'
import TestimonialSlider from './Home/TestimonialSlider'
import ProductCarousel from './Home/ProductCarousel'
import LinkList from './Home/LinkList'

  const products1 = [
    { id: 1, name: "Product 1", image: "https://via.placeholder.com/150", price: 100 },
    { id: 2, name: "Product 2", image: "https://via.placeholder.com/150", price: 200 },
    { id: 3, name: "Product 3", image: "https://via.placeholder.com/150", price: 300 },
    { id: 4, name: "Product 4", image: "https://via.placeholder.com/150", price: 400 },
    { id: 5, name: "Product 5", image: "https://via.placeholder.com/150", price: 500 },
    { id: 1, name: "Product 1", image: "https://via.placeholder.com/150", price: 100 },
    { id: 2, name: "Product 2", image: "https://via.placeholder.com/150", price: 200 },
    { id: 3, name: "Product 3", image: "https://via.placeholder.com/150", price: 300 },
    { id: 4, name: "Product 4", image: "https://via.placeholder.com/150", price: 400 },
  ];

const Home = () => {
  return (
    <motion.div className='mt-[110px] mx-auto max-w-screen-xl px-4 '

    >
      {/* annuncement hero section */}
      <div>
        <FileAnnoncement/>
        
        <Category/>

        <ShopList/>
        
        <ProductCarousel ProductName="Chemist Store" />
        <ProductCarousel ProductName="Breakfast & dairy" />
        <ProductCarousel ProductName="Biscuits, snacks & chocolates" />
        <ProductCarousel ProductName="Groceries" />
        
        <TestimonialSlider/>

        <LinkList/>
       
      </div>
    </motion.div>
  )
}

export default Home
