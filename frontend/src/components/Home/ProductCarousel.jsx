import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductCarousel = (props) => {
  const products = [
    { id: 1, name: "Amul Masti Curd", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg?ts=1726473593", price: 35 },
    { id: 2, name: "Amul Salted Butter", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314", price: 60 },
    { id: 3, name: "Harvest Gold-White Bread", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a9b8e4d0-62ae-4a55-b0f7-c07d16a09326.jpg?ts=1707564212", price: 30 },
    { id: 4, name: "Table White Eggs", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a38b1b53-9c9d-4a2f-9141-06f2dbeb51ea.jpg?ts=1723099180", price: 85 },
    { id: 5, name: "Table White Eggs(6 Psc)", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/3229ef67-1d89-4dc4-8beb-cdbe41e49f89.jpg?ts=1723099181", price: 55 },
    { id: 1, name: "Amul Taaza Toned Milk", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6d41a6e4-eb1b-413c-8e20-7b9e892e42f8.jpg?ts=1712325555", price: 71 },
    { id: 2, name: "Amul Cheese Prices", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0f895474-ac1e-4f52-9587-891e32ab1ba9.jpg?ts=1707312315", price: 140 },
    { id: 3, name: "Hrvest Gold-Wheat Bread", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/42139f09-bfa0-4445-9827-bae0e2f3e52b.jpg?ts=1726817074", price: 60 },
    { id: 4, name: "Harvest Gold Hearty Brown Bread", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/79c14c88-da9f-482d-8393-38f65756da08.jpg?ts=1707564216", price: 55 },
  ];

  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => ({ ...acc, [product.id]: 0 }), {})
  );

  const handleAdd = (id) => {
    setQuantities({ ...quantities, [id]: quantities[id] + 1 });
  };

  const handleRemove = (id) => {
    if (quantities[id] > 0) {
      setQuantities({ ...quantities, [id]: quantities[id] - 1 });
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleProducts = 3;

  const handleNext = () => {
    if (currentIndex < products.length - visibleProducts) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="bg-gray-100 py-8 px-6 mt-4 rounded-lg">
      {/* Category Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-extrabold text-gray-800">{props.ProductName}</h2>
        <button className="font-bold text-xl text-green-600 hover:underline">See All</button>
      </div>

      {/* Product Slider */}
      <div className="relative">
        {/* Left Arrow */}
        {currentIndex > 0 && (
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 z-10"
            onClick={handlePrev}
          >
            <FaChevronLeft size={20} />
          </button>
        )}

        {/* Slider Container */}
        <div className="overflow-hidden">
          <motion.div
            className="flex space-x-6 py-6"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleProducts)}%)` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-lg shadow p-4 w-64 flex-shrink-0"
                initial={{ scale: 0.8, opacity: 0,rotate:10 }}
                animate={{ scale: 1, opacity: 1,rotate:0}}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.1}}
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />

                {/* Product Details */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
                  <p className="text-gray-500">Price: ₹{product.price}</p>
                </div>

                {/* Quantity and Add Button */}
                <div className="flex items-center justify-center mt-4">
                  {quantities[product.id] === 0 ? (
                    <button
                      className="bg-green-600 text-white py-1 px-4 rounded-md hover:bg-green-700"
                      onClick={() => handleAdd(product.id)}
                    >
                      Add
                    </button>
                  ) : (
                    <div className="flex items-center space-x-4">
                      <button
                        className="bg-gray-300 text-gray-800 py-1 px-2 rounded-md hover:bg-gray-400"
                        onClick={() => handleRemove(product.id)}
                      >
                        -
                      </button>
                      <span className="text-lg font-bold">{quantities[product.id]}</span>
                      <button
                        className="bg-gray-300 text-gray-800 py-1 px-2 rounded-md hover:bg-gray-400"
                        onClick={() => handleAdd(product.id)}
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Arrow */}
        {currentIndex < products.length - visibleProducts && (
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 z-10"
            onClick={handleNext}
          >
            <FaChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCarousel;
