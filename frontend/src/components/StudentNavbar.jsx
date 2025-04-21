import React from 'react';

function StudentNavbar() {
  // You can manage roles using context or props later.
  const isStudent = true;

  const studentLinks = ['My Room', 'My Requests', 'Notifications'];

  return (
    <nav className="bg-black text-[#39d5ff] p-2 flex justify-between">
      <div className='flex flex-row'>
        <img src="/Logo_Dorm_Sync.png" alt="Logo" className='h-12 w-12' />
        <div className='flex flex-col pt-3'>
          <img src="/Logo_Line.png" alt="Logo_Name" className='h-3 w-16 pl-3'/>
          <img src="/Logo_Tagline.png" alt="Logo_Tagline" className='h-5 w-20' />
        </div>
      </div>

      <div className="flex gap-6 items-center">
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

        <a
          href="/logout"
          className="relative group text-[#39d5ff] hover:text-[#00C9FF] transition"
        >
          Logout
          <span className="absolute left-1/2 bottom-[-2px] w-0 group-hover:w-full h-[2px] bg-[#00C9FF] transition-all duration-300 ease-out transform -translate-x-1/2 origin-center" />
        </a>
      </div>
    </nav>
  );
}

export default StudentNavbar;
