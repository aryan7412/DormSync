import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/Logo_Dorm_Sync.png'; // Update with your logo path

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 py-10 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left Section */}
        <div className="flex items-start gap-4">
          <img src={logo} alt="DormSync Logo" className="w-12 h-12 object-contain" />
          <div>
            <h2 className="text-xl font-bold text-[#39d5ff]">DORMSYNC</h2>
            <p className="text-sm text-gray-400">Seamless Stay. Simple Bookings.</p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col gap-2 text-sm">
          <span className="text-white font-semibold mb-2">Important Links</span>
          <Link to="/" className="hover:text-[#39d5ff] transition">Home</Link>
          <Link to="/zostel" className="hover:text-[#39d5ff] transition">Zostel</Link>
          <Link to="/dormitory" className="hover:text-[#39d5ff] transition">Dormitory</Link>
          <Link to="/about" className="hover:text-[#39d5ff] transition">About</Link>
          <Link to="/contact" className="hover:text-[#39d5ff] transition">Contact</Link>
        </div>

        {/* Right Section */}
        <div className="text-xs text-gray-500 text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} DormSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
