import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
// import { useNavigate } from 'react-router-dom';

const TiltCard = ({ title, desc, buttonText, to }) => {
  const tiltRef = useRef(null);
//   const navigate = useNavigate();

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        scale: 1.05,
      });
    }
  }, []);

  return (
    <div
      ref={tiltRef}
      className="flex flex-col justify-between bg-[#121212] border border-[#1f1f1f] p-6 rounded-2xl shadow-lg text-[#39d5ff] w-full max-w-md
      hover:border-[#39d5ff] hover:shadow-[#39d5ff66] transition duration-300"
    >
      <div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 text-base">{desc}</p>
      </div>
      <button
        onClick={() => navigate(to)}
        className="mt-6 px-5 py-2 bg-[#39d5ff] hover:bg-[#2bb9de] text-black font-semibold rounded-xl transition"
      >
        {buttonText}
      </button>
    </div>
  );
};

const BookingOptions = () => {
  return (
    <div className="min-h-screen bg-[#0e0e0e] flex flex-col items-center justify-center px-4 py-10">
      <h2 className="text-3xl md:text-4xl text-white font-bold mb-10 text-center">
        Choose Your Stay
      </h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        <TiltCard
          title="Zostel"
          desc="Zostels are cozy backpacker hostels offering a fun and social atmosphere for travelers. Great for meeting new people and exploring together."
          buttonText="Book Zostel"
          to="/zostel"
        />
        <TiltCard
          title="Dormitory"
          desc="Dormitories provide affordable shared accommodations, ideal for groups or solo travelers looking for budget-friendly stays with basic amenities."
          buttonText="Book Dormitory"
          to="/dormitory"
        />
      </div>
    </div>
  );
};

export default BookingOptions;
