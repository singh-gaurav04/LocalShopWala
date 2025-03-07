import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Saloni Kumari",
    role: "AIML Students",
    image: "src/assets/saloniFinal.jpeg",
    testimonial:
      "3rd year B.Tech student @LNCT,Bhopal | C++ | Frontend Developer | Python |  Machine Learning",
  },
  {
    id: 2,
    name: "Gaurav Singh",
    role: "AIML Students",
    image: "src/assets/gaurav.jpeg",
    testimonial:
      "B.Tech Student LNCT'26 | AI/ML Enthusiast | 250+ Problems @Leetcode (c++) | HTML | CSS | TAILWIND CSS | JS | REACTJS | @exploring Machine Learning| LNCT Bhopal",
  },
  {
    id: 3,
    name: "Mohit Kumar Sahu",
    role: "AIML Students",
    image: "src/assets/mohit.jpeg",
    testimonial:
      "🎓 3rd Year B.Tech. (CSE-AIML) Undergrad | LNCT Main, Bhopal AI/ML Enthusiast | Problem Solver | Tech Explorer",
  },
];

const TestimonialSlider = () => {
  const containerVariants = {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
  };

  return (
    <div className="bg-gray-100 py-12 px-6 mt-4 rounded-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Team
      </h2>

      {/* Slider */}
      <div className="flex justify-center items-center overflow-hidden">
        <motion.div
          className="flex space-x-8 p-8 cursor-pointer"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1,
            ease: "easeInOut",
            type: "spring",
          }}
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              className="bg-blue-100 p-6  rounded-lg shadow-lg w-72 relative "
              whileHover={{scale:1.2}}
            >
              <div className="absolute top-4 left-4 text-green-500">
                <FaQuoteLeft size={20} />
              </div>
              <div className="absolute bottom-4 right-4 text-green-500">
                <FaQuoteRight size={20} />
              </div>
              <div className="flex flex-col items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 rounded-full border-2 border-green-500"
                />
                <h3 className="mt-4 text-lg font-semibold text-gray-700">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
              <p className="text-gray-600 text-center">{item.testimonial}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
