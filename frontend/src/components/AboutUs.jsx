import React from 'react';
import FeaturedCard from './FeaturedCard'; // adjust path if needed

function Landing() {
  return (
    <>
      {/* What We Do Section */}
      <section className="relative py-20 px-6 md:px-20 bg-black text-[#39d5ff] z-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">What We Do</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <FeaturedCard title="Real-Time Room Availability" desc="Instantly view available rooms and beds in your dorm or hostel." />
            <FeaturedCard title="Easy Bed Assignments" desc="Assign, request, or book beds seamlessly with just a few clicks." />
            <FeaturedCard title="Optimized for Travelers Too" desc="From students to digital nomads — DormSync adapts to dorms, hostels, and Zostel-like stays." />
            <FeaturedCard title="Smart Filtering" desc="Find what you need by filtering capacity, location, and current availability." />
        </div>
        </section>

        {/* Who We Are Section */}
        <section className="relative py-20 px-6 md:px-20 bg-black text-[#39d5ff] z-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">Who I Am</h2>
        <p className="text-gray-400 max-w-4xl mx-auto text-center text-lg">
            I'm a solo developer building DormSync to solve real-life problems in dorm and hostel management.
            Whether it’s students managing their accommodation or travelers looking for a short stay,
            DormSync brings clarity, speed, and ease — all in one beautifully simple dashboard.
        </p>
        </section>
    </>
  );
}

export default Landing;
