import React from 'react'
import Image from 'next/image'
import {
  Facebook,
  Instagram,
  Twitter,
  Github,
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-200 mt-2">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Image src="/logo.png" width={80} height={80} alt="Logo" className="rounded-full" />
        </div>

        <p className="mx-auto mt-6 max-w-xl text-center text-gray-600">
          LocalShopWala helps you connect with nearby local shops and get timely deliveries of trusted products from your area. Supporting small businesses, one delivery at a time.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-semibold text-gray-800">Quick Links</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-800">Home</a></li>
              <li><a href="#" className="hover:text-gray-800">Services</a></li>
              <li><a href="#" className="hover:text-gray-800">Projects</a></li>
              <li><a href="#" className="hover:text-gray-800">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold text-gray-800">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-800">About Us</a></li>
              <li><a href="#" className="hover:text-gray-800">Careers</a></li>
              <li><a href="#" className="hover:text-gray-800">Blog</a></li>
              <li><a href="#" className="hover:text-gray-800">History</a></li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold text-gray-800">Legal</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-800">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-800">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gray-800">Refund Policy</a></li>
              <li><a href="#" className="hover:text-gray-800">Licenses</a></li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold text-gray-800">Contact Us</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>Email: <a href="mailto:support@localshopwala.com" className="hover:text-gray-800">support@localshopwala.com</a></li>
              <li>Phone: +91-7479582593</li>
              <li>Address: Bhopal, MP, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-center space-x-6 text-gray-600">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:scale-125 transition-all ease-in-out">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:scale-125 transition-all ease-in-out">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:scale-125 transition-all ease-in-out">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:scale-125 transition-all ease-in-out">
            <Github className="h-6 w-6" />
          </a>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} LocalShopWala. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
