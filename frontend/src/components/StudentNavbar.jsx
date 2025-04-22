import React from 'react';

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
            <a
              key={link}
              href={`/${link.toLowerCase().replace(/\s/g, '-')}`}
              className="relative group text-[#39d5ff] hover:text-[#00C9FF] transition"
            >
              {link}
              <span className="absolute left-1/2 bottom-[-2px] w-0 group-hover:w-full h-[2px] bg-[#00C9FF] transition-all duration-300 ease-out transform -translate-x-1/2 origin-center" />
            </a>
          ))}
      </div>

      <div className="flex items-center">
        <a
          href="/logout"
          className="bg-gradient-to-r from-[#39d5ff] to-[#00C9FF] text-black font-medium text-sm px-4 py-1.5 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
        >
          Login
        </a>
      </div>
    </nav>
  );
}

export default StudentNavbar;
