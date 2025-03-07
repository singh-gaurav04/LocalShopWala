
import React from "react";

const LinkList = () => {
  const categories = [
    "Vegetables & Fruits",
    "Munchies",
    "Breakfast & Instant Food",
    "Bakery & Biscuits",
    "Atta, Rice & Dal",
    "Sauces & Spreads",
    "Organic & Gourmet",
    "Baby Care",
    "Cleaning Essentials",
    "Personal Care",
    
  ];

  const usefulLinks = [
    "About",
    "Press",
    "Privacy",
    "Security",
    "Partner",
    "Spotlight",
    "FAQs",
    "Terms",
    "Support",
    "Contact",
  ];

  return (
    <footer className="bg-green-50 mt-4 rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-around  py-3 rounded-t-lg">
        <h2 className="text-lg font-semibold">Categories</h2>
        <h2 className="text-lg font-semibold">Useful Links</h2>
      </div>

      {/* Links Section */}
      <div className="flex flex-col md:flex-row justify-around py-8 px-4 ">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 list-none ">

          <div className="">
            <li className="cursor-pointer hover:text-green-500">Vegetables & Fruits</li>
            <li  className="cursor-pointer hover:text-green-500">Munchies</li>
            <li className="cursor-pointer hover:text-green-500">Breakfast & Instant Food</li>
            <li  className="cursor-pointer hover:text-green-500">Bakery & Biscuits</li>
            <li  className="cursor-pointer hover:text-green-500">Atta, Rice & Dal</li>
            <li  className="cursor-pointer hover:text-green-500">Sauces & Spreads</li>
            <li  className="cursor-pointer hover:text-green-500">Organic & Gourmet</li>
            <li className="cursor-pointer hover:text-green-500">Baby Care</li>
            <li className="cursor-pointer hover:text-green-500">Cleaning Essentials</li>
            <li className="cursor-pointer hover:text-green-500">Personal Care</li>
          </div>
          <div>
          <li className="cursor-pointer hover:text-green-500">Vegetables & Fruits</li>
            <li  className="cursor-pointer hover:text-green-500">Munchies</li>
            <li className="cursor-pointer hover:text-green-500">Breakfast & Instant Food</li>
            <li  className="cursor-pointer hover:text-green-500">Bakery & Biscuits</li>
            <li  className="cursor-pointer hover:text-green-500">Atta, Rice & Dal</li>
            <li  className="cursor-pointer hover:text-green-500">Sauces & Spreads</li>
            <li  className="cursor-pointer hover:text-green-500">Organic & Gourmet</li>
            <li className="cursor-pointer hover:text-green-500">Baby Care</li>
            <li className="cursor-pointer hover:text-green-500">Cleaning Essentials</li>
            <li className="cursor-pointer hover:text-green-500">Personal Care</li>
          </div>
          
      </div>

        {/* Useful Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-20 mt-6 md:mt-0 list-none">

          <div>
            <li className="cursor-pointer hover:text-green-500">About</li>
            <li className="cursor-pointer hover:text-green-500">Press</li>
            <li className="cursor-pointer hover:text-green-500">Privacy</li>
            <li className="cursor-pointer hover:text-green-500">Security</li>
            <li className="cursor-pointer hover:text-green-500">Partner</li>
            <li className="cursor-pointer hover:text-green-500">FAQs</li>
          </div>
          <div>
          <li className="cursor-pointer hover:text-green-500">About</li>
            <li className="cursor-pointer hover:text-green-500">Press</li>
            <li className="cursor-pointer hover:text-green-500">Privacy</li>
            <li className="cursor-pointer hover:text-green-500">Security</li>
            <li className="cursor-pointer hover:text-green-500">Partner</li>
            <li className="cursor-pointer hover:text-green-500">FAQs</li>
          </div>
          <div>
          <li className="cursor-pointer hover:text-green-500">About</li>
            <li className="cursor-pointer hover:text-green-500">Press</li>
            <li className="cursor-pointer hover:text-green-500">Privacy</li>
            <li className="cursor-pointer hover:text-green-500">Security</li>
            <li className="cursor-pointer hover:text-green-500">Partner</li>
            <li className="cursor-pointer hover:text-green-500">FAQs</li>
          </div>
          
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-green-600 text-white text-center py-4 rounded-b-lg">
        <p className="text-sm">
          © {new Date().getFullYear()} LocalShopWala. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default LinkList;
