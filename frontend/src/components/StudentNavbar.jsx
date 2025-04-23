import React from 'react';
import { Link } from 'react-router-dom';

function StudentNavbar() {
  const isStudent = true;
  const studentLinks = ['Home', 'Zostel', 'Dormitory'];

  return (
    <nav className="bg-black text-[#39d5ff] p-4 flex justify-between">
      <div className="flex flex-row">
        <img src="/Logo_Dorm_Sync.png" alt="Logo" className="h-16 w-16" />
      </div>

      <div className="flex gap-36 items-center mx-1 text-lg">
        {isStudent &&
          studentLinks.map((link) => (
            <Link
            key={link}
            to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(/\s/g, '-')}`}
            className="relative group text-[#39d5ff] hover:text-[#00C9FF] transition"
          >
            <span className="relative py-1">
              {link}
              <span className="absolute left-1/2 bottom-0 w-full h-0.5 bg-[#00C9FF] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 -translate-x-1/2"></span>
            </span>
          </Link>
          ))}
      </div>

      <div className="flex items-center">
        <Link to="/logout" className="bg-gradient-to-r from-[#39d5ff] to-[#00C9FF] text-black font-medium text-sm px-4 py-1.5 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
          Logout
        </Link>

      </div>
    </nav>
  );
}

export default StudentNavbar;
