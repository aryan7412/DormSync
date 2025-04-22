import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const FeatureCard = ({ title, desc }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      scale: 1.05,
    });
  }, []);

  return (
    <div
      ref={tiltRef}
      className="bg-[#121212] border border-[#1f1f1f] p-6 rounded-xl shadow-lg transition duration-300 text-[#39d5ff]
        hover:border-[#39d5ff] hover:shadow-[#39d5ff66] cursor-pointer"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
};

export default FeatureCard;
