import Lottie from "lottie-react";
import React from "react";
import shopnow from "../../assets/animation/shopnow.json";
import { delay, motion } from "framer-motion";
import { NavLink } from "react-router-dom";


const Announcement = () => {
  return (
    <motion.div
    initial={{ x: -200 }}
    animate={{ x: 0, 
    }}
    transition={{ duration: 0.8, ease: "easeOut" }}

      className="h-auto w-full py-8 rounded-3xl my-4 flex flex-col md:flex-row  justify-around items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1442805278/photo/green-smoke-wisps-or-hazy-fog-on-black-background-light-green-cloudy-texture-elegant-banner.jpg?s=612x612&w=0&k=20&c=cLRCYl4VpKeBE9FCGnSN-k0QyE8exAcHTdU1naZjgQk=')",
      }}
    >
      {/* Lottie Animation */}
      <Lottie
        animationData={shopnow}
        className="w-48 md:scale-150 md:w-32"n
      />

      {/* Text Section */}
      <motion.div
        className="flex flex-col items-center gap-4 px-4 "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p
          className="font-extrabold text-3xl md:text-4xl text-center text-white "
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Register Your Shop
        </motion.p>
        <motion.p
          className="font-extrabold text-2xl md:text-3xl text-center text-white"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          On
        </motion.p>
        <motion.p
          className="font-extrabold text-4xl md:text-5xl text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          LocalShopWala
        </motion.p>
      </motion.div>

      {/* Button */}
      <motion.div
        className="px-6 py-3 mt-6 md:mt-0 font-bold border border-gray-300 text-gray-800 bg-white rounded-md shadow-md hover:bg-gray-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <NavLink to="/Signup">Register Now</NavLink>
      </motion.div>
    </motion.div>
  );
};

export default Announcement;
