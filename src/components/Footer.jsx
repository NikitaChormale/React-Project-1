import React from "react";
import { Link } from "react-router";
import { Facebook, Instagram, Youtube, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-yellow-200 text-gray-700 border-t
     shadow-inner border-none">

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 
      md:grid-cols-4 gap-10 text-center md:text-left">

        <div>
          <h2 className="text-3xl font-extrabold text-yellow-600 tracking-wide">
            Fruitora Fruits
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            Fruitora brings you farm-fresh fruits and vegetables with quality, 
            freshness, and fast delivery at your doorstep.
  

          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-800 border-b pb-2">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-yellow-500 transition">Home</Link></li>
            <li><Link to="/product" className="hover:text-yellow-500 transition">Product</Link></li>
            <li><Link to="/callus" className="hover:text-yellow-500 transition">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-800 border-b pb-2 ">
            Follow Us
          </h3>

          <p className="text-sm mb-4 text-gray-600">
            Get Updates Fresh Friuts & Offers.
          </p>

          <div className="flex justify-center md:justify-start gap-4 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="bg-white shadow-md p-2 rounded-full hover:scale-110 hover:text-blue-600 transition">
              <Facebook />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="bg-white shadow-md p-2 rounded-full hover:scale-110 hover:text-pink-500 transition">
              <Instagram />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="bg-white shadow-md p-2 rounded-full hover:scale-110 hover:text-sky-500 transition">
              <Twitter />
            </a>

            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              className="bg-white shadow-md p-2 rounded-full hover:scale-110 hover:text-black transition">
              <Github />
            </a>

            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
              className="bg-white shadow-md p-2 rounded-full hover:scale-110 hover:text-red-500 transition">
              <Youtube />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t text-center py-4 text-sm bg-yellow-500 text-gray-700 font-medium border-none">
        © {new Date().getFullYear()} .  Fruitora Fruits All rights reserved.
      </div>
    </footer>
  );
}
