import React from 'react'

function Landing() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Radial Glow Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-blue-900 opacity-35 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="z-10 text-center">
        <h1 className="text-6xl font-extrabold tracking-wide font-[Orbitron]">DORMSYNC</h1>
        <p className="text-lg text-gray-400 mt-2 font-[Orbitron]">Smarter Dorm Control</p>
      </div>
    </div>
  )
}

export default Landing
