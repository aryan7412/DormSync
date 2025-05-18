import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const TiltCard = ({ title, desc, buttonText, to, label }) => {
  const tiltRef = useRef(null);
  const navigate = useNavigate();

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
      className="flex flex-col justify-between bg-[#121212] border border-[#1f1f1f] p-6 rounded-2xl shadow-lg text-[#39d5ff] w-full max-w-md min-h-[400px]
      hover:border-[#39d5ff] hover:shadow-[#39d5ff66] transition duration-300"
    >
      <div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 italic mb-3">{label}</p>
        <p className="text-gray-400 text-base leading-relaxed">{desc}</p>
      </div>
      <Button to={to} buttonText={buttonText} />
    </div>
  );
};

const BookingOptions = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center px-4 py-6">
      <h2 className="text-3xl md:text-4xl text-white font-bold mb-8 text-center font-[Orbitron]">
        Choose Your Stay
      </h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        <TiltCard
          title="Zostel"
          label="For social backpackers"
          desc="Zostels are hip, vibrant hostels where travelers from across the globe come together. Perfect for backpackers who love meeting people, joining events, and discovering new cultures while staying in style."
          buttonText="Book Zostel"
          to="/zostel"
        />
        <TiltCard
          title="Dormitory"
          label="For budget-conscious travelers"
          desc="Dormitories offer practical, shared spaces at an affordable rate. Ideal for students, solo travelers, and groups looking for basic, no-frills accommodation that doesn't compromise on comfort."
          buttonText="Book Dormitory"
          to="/dormitory"
        />
        <TiltCard
          title="Hostel"
          label="Affordable stays for travelers"
          desc="Hostels provide budget-friendly accommodation with shared or private rooms. Perfect for backpackers, students, and social travelers seeking a comfortable and communal environment."
          buttonText="Book Hostel"
          to="/hostel"
        />
      </div>
    </div>
  );
};

export default BookingOptions;
