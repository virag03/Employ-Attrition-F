import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-full shadow-sm py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center sticky top-0 z-50 border-b">
      <div className="text-2xl font-bold text-[#00ABE4]">Workplace Compass</div>
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-gray-400 hover:text-[#00ABE4] transition">Home</Link>
        <Link to="/attrition-predictor" className="text-gray-400 hover:text-[#00ABE4] transition">Attrition Predictor</Link>
        <Link to="/retention-policy" className="text-gray-400 hover:text-[#00ABE4] transition">Retention Policy</Link>
        <Link to="/contact" className="text-gray-400 hover:text-[#00ABE4] transition">Contact</Link>
        <Link to="/about-us" className="text-gray-400 hover:text-[#00ABE4] transition">About Us</Link>
        <Link to="/careers" className="text-gray-400 hover:text-[#00ABE4] transition">Careers</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/attrition-predictor">
          <button className="px-4 py-2 bg-[#00ABE4] text-white rounded-md hover:bg-blue-600 transition shadow-sm">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar