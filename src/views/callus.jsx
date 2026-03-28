import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Callus() {
  return (
    <div>
      <Navbar />

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 pt-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[rgb(198,240,10)]">
            Call Us
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            We’d love to hear from you! Get in touch with Fruitora for fresh
            fruits, orders, and support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Side Contact Info */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-red-100">
            <h2 className="text-2xl font-semibold text-[#E63946] mb-6">
              Contact Information
            </h2>

            <div className="space-y-5 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg">📞 Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">📧 Email</h3>
                <p className="text-gray-600">support@fruitora.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">📍 Address</h3>
                <p className="text-gray-600">
                  Fruitora Market, Pune, Maharashtra, India
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">🕒 Working Hours</h3>
                <p className="text-gray-600">
                  Monday - Sunday: 8:00 AM - 10:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Contact Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-red-100">
            <h2 className="text-2xl font-semibold text-[#E63946] mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5 ">
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#E63946] hover:bg-[#C1121F] text-white font-semibold py-3 rounded-xl transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Callus
