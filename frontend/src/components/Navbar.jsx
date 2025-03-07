import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import Lottie from "lottie-react";
import mic from "../assets/animation/mic.json";
import address from "../assets/animation/address.json";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      className='bg-gray-200 shadow-md fixed w-full h-[100px] z-50 top-0 border-5 border-red-400 '
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className='container mx-auto px-10 py-3 flex items-center justify-between'>
        {/* Left: Logo */}

        <div className='space-x-4 flex'>
          <motion.div
            className='text-2xl font-bold text-green-600 flex-shrink-0 border-2 border-yellow-400 rounded-lg'
            whileHover={{ scale: 1.1 }}
          >
            <NavLink to='/'>
              <img
                src={Logo}
                alt='LocalShopWala'
                className='h-12 w-16 md:h-16 md:w-20'
              />
            </NavLink>
          </motion.div>

          {/* Just Right: Address */}
          <motion.div
            className='hidden md:flex items-center text-gray-600 flex-shrink-0 mr-8'
            whileHover={{ scale: 1.05 }}
          >
            <p className='bg-gray-50 pr-4 gap-2 flex items-center border-grey-600 border-2 rounded-md font-semibold'>
              <Lottie animationData={address} className='h-12 w-12' />
              Select Your Address
            </p>
          </motion.div>
        </div>

        {/* Center: Mic Button and Search Bar */}
        <motion.div
          className='flex items-center w-full max-w-lg relative'
          whileHover={{ scale: 1.02 }}
        >
          {/* Mic Button */}
          <motion.button
            className='h-12 bg-green-500 w-16 border-2 text-white rounded-l-md hover:bg-green-700 focus:outline-none flex items-center justify-center'
            whileHover={{ scale: 1.1 }}
            aria-label='Use Mic'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='-8 0 40 22'
              fill='currentColor'
            >
              <path d='M20.4668 7.69379L20.7134 7.12811C21.1529 6.11947 21.9445 5.31641 22.9323 4.87708L23.6919 4.53922C24.1027 4.35653 24.1027 3.75881 23.6919 3.57612L22.9748 3.25714C21.9616 2.80651 21.1558 1.97373 20.7238 0.930828L20.4706 0.319534C20.2942 -0.106511 19.7058 -0.106511 19.5293 0.319534L19.2761 0.930828C18.8442 1.97373 18.0384 2.80651 17.0252 3.25714L16.308 3.57612C15.8973 3.75881 15.8973 4.35653 16.308 4.53922L17.0677 4.87708C18.0555 5.31641 18.8471 6.11947 19.2866 7.12811L19.5331 7.69379C19.7136 8.10792 20.2864 8.10792 20.4668 7.69379ZM3.05469 11H5.07065C5.55588 14.3923 8.47329 17 11.9998 17C15.5262 17 18.4436 14.3923 18.9289 11H20.9448C20.4837 15.1716 17.1714 18.4839 12.9998 18.9451V23H10.9998V18.9451C6.82814 18.4839 3.51584 15.1716 3.05469 11ZM12 1C9.23858 1 7 3.23858 7 6V10C7 12.7614 9.23858 15 12 15C14.7614 15 17 12.7614 17 10V7H15V10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10V6C9 4.34315 10.3431 3 12 3C12.5972 3 13.1509 3.17349 13.617 3.47248L14.6969 1.7891C13.9182 1.28957 12.9914 1 12 1Z'></path>
            </svg>
          </motion.button>

          {/* Search Bar */}
          <input
            type='text'
            placeholder='Search smarter and faster with AI mic '
            className='pl-4 p-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full text-sm sm:text-base'
          />
        </motion.div>

        {/* Right: Cart and Login (Visible on Desktop) */}
        <div className='hidden md:flex items-center space-x-10  border-red-500 '>
          <motion.div
            className='px-4 py-2 border font-semibold border-green-500 text-green-600 bg-green-100 rounded-md hover:bg-green-200'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink to='/cart'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM6.00436 7.00265V13.0027H17.5163L19.3163 7.00265H6.00436ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z'></path>
              </svg>
              <span>cart</span>
            </NavLink>
          </motion.div>

          {/* Login and Signup */}

          <div className="flex gap-2">
          <motion.div
            className='px-4 py-2 border font-bold border-gray-300 text-gray-800 bg-gray-100 rounded-md hover:bg-gray-200'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink to='/login'>Login</NavLink>
          </motion.div>
          {/* <motion.div
            className='px-4 py-2 border font-bold border-gray-300 text-gray-800 bg-gray-100 rounded-md hover:bg-gray-200'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink to='/Signup'>Signup</NavLink>
          </motion.div> */}
          </div>
          
        </div>

        {/* Mobile: Menu Icon */}
        <div className='md:hidden flex items-center'>
          <motion.button
            className='p-2 text-green-600'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            aria-label='Menu'
          >
            ☰
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className='md:hidden bg-white shadow-md p-4 flex flex-col items-center'
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <NavLink
            to='/cart'
            className='py-2 px-4 text-gray-800 hover:text-green-600 font-bold'
          >
            Cart
          </NavLink>
          <NavLink
            to='/login'
            className='py-2 px-4  text-gray-800 hover:text-green-600 '
          >
            Login
          </NavLink>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
