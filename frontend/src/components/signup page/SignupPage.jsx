import React, { useState } from "react";
import { motion } from "framer-motion";
import UserForm from "./UserForm";
import ShopkeeperForm from "./ShopkeeperForm";

const SignupPage = () => {
  const [isShopkeeper, setIsShopkeeper] = useState(false);

  // Define transition for form switching
  const formTransition = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <div
      className="max-w-screen-xl mx-auto  relative mt-[120px]"
      // style={{ backgroundImage: "url('https://example.com/your-bg-image.jpg')" }}
    >
      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div>  */}
      <div className="min-h-screen relative z-10">
        {/* Title */}
        {/* <motion.h1
          className="text-3xl font-bold text-blue-500- mb-8"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sign Up for LocalShopWala
        </motion.h1> */}

        {/* Toggle Between User and Shopkeeper */}
        {/* <motion.div
          className="flex space-x-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button
            className={`px-6 py-2 rounded-md ${!isShopkeeper ? "bg-green-600 text-white" : "bg-gray-300"}`}
            onClick={() => setIsShopkeeper(false)}
          >
            User
          </button>
          <button
            className={`px-6 py-2 rounded-md ${isShopkeeper ? "bg-green-600 text-white" : "bg-gray-300"}`}
            onClick={() => setIsShopkeeper(true)}
          >
            Shopkeeper
          </button>
        </motion.div> */}

        {/* Page Transition for Form */}
        <motion.div
          className=""
          variants={formTransition}
          initial="initial"
          animate="animate"
          exit="exit"
        >
         
            <ShopkeeperForm />
          
        </motion.div>
      </div>
    </div>
  );
};

export default SignupPage;
