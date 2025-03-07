import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const ShopList = () => {
  // Ref for horizontal scrolling
  const scrollRef = useRef(null);

  //  shop data
  const shops = [
    {
      id: 1,
      name: "Dinesh Genral Store",
      image: "https://m.media-amazon.com/images/I/91Wd2-DDeUL._AC_UF1000,1000_QL80_.jpg",
      address: "narela jod",
      rating: 4.5,
    },
    {
      id: 2,
      name: "R.K. Mobiles",
      image: "https://content.jdmagicbox.com/v2/comp/mumbai/u9/022pxx22.xx22.190605145342.j5u9/catalogue/r-k-mobile-shop-thane-west-thane-mobile-phone-dealers-samsung-yv512591m5.jpg",
      address: "ISRO Colony",
      rating: 4.0,
    },
    {
      id: 3,
      name: "Vinayak Stores",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtnYbTKyFHH1vjMLnjCcZOpGZSmObMzhX1kg&s",
      address: "narela jod",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Veggie Greens",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThw1fwMf1gWNaZjIBmKGM7MuVVSKvJTGPMJw&s",
      address: "Ayodhaya Nagar",
      rating: 4.2,
    },

    {
      id: 5,
      name: "Gupta Electronics",
      image: "https://content.jdmagicbox.com/comp/bhopal/f2/0755px755.x755.180111135015.n9f2/catalogue/gupta-electronics-spare-house-m-p-nagar-bhopal-electrical-shops-l6w82.jpg",
      address: "T-Point",
      rating: 3.9,
    },

    {
      id: 5,
      name: "Shree Medicals",
      image: "https://content.jdmagicbox.com/comp/bhopal/v1/0755px755.x755.150224010626.e2v1/catalogue/shri-medical-store-bagh-swaniya-bhopal-chemists-2mzg35m4uh.jpg",
      address: "narela Jod",
      rating: 4.2,
    },

    {
      id: 6,
      name: "Shiv Hari Traders",
      image: "https://content.jdmagicbox.com/comp/bhopal/l9/0755px755.x755.170926110420.l1l9/catalogue/shivhari-traders-ashoka-garden-bhopal-hardware-shops-3o5i055cr8.jpg",
      address: "ISRO Colony",
      rating: 4.2,
    },

    {
      id: 7,
      name: "Galaxy",
      image: "https://content.jdmagicbox.com/comp/bhopal/w6/0755px755.x755.190908182512.k4w6/catalogue/galaxy-99-and-above-bhopal-bhopal-gift-shops-5lhr03v33u.jpg?clr=",
      address: "T-Point",
      rating: 4.2,
    },

  ];

  // Scroll horizontally
  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full h-full py-8 px-6 rounded-3xl bg-gradient-to-r from-green-200 to-green-400 shadow-lg mt-4  relative"
    style={{
        backgroundImage:
          "url('https://www.shutterstock.com/image-photo/delivery-healthy-food-background-vegan-260nw-1694328823.jpg')",
      }}>
      {/* Heading */}
      <motion.h1
        className="font-extrabold text-3xl md:text-4xl text-center text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Shops Near Me
      </motion.h1>

      {/* Scroll Controls */}
      <div className="  absolute top-52 z-20 space-x-[1120px]">
        <button
          className="text-white bg-green-500 p-2 rounded-full hover:bg-green-600"
          onClick={() => scroll("left")}
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          className="text-white bg-green-500 p-2 rounded-full hover:bg-green-600"
          onClick={() => scroll("right")}
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* Shops List */}
      <div
        ref={scrollRef}
        className="flex py-6 gap-4 overflow-hidden"
      >
        {shops.map((shop) => (
          <motion.div
            key={shop.id}
            className="min-w-[250px] p-4 bg-blue-100 rounded-lg shadow-lg border-2 border-green-400 cursor-pointer hover:bg-blue-200"
            initial={{ scale: 0.8, opacity: 0,rotate:10 }}
            animate={{ scale: 1, opacity: 1,rotate:0}}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.1,rotate:10}}
          >
            {/* Shop Image */}
            <div className="flex justify-center">
              <img
                src={shop.image}
                alt={shop.name}
                className="w-20 h-20 rounded-full border-2 border-green-400"
              />
            </div>
            {/* Shop Details */}
            <h2 className="font-bold text-lg text-gray-800 text-center mt-4">
              {shop.name}
            </h2>
            <p className="text-sm text-gray-600 text-center">{shop.address}</p>
            {/* Rating */}
            <div className="flex justify-center items-center mt-2">
              <FaStar className="text-yellow-500" />
              <span className="text-gray-600 ml-2">{shop.rating} / 5</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShopList;
