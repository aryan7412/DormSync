import React from 'react';
import StudentNavbar from './StudentNavbar';
import Landing from './Landing';
import AboutUs from './AboutUs'
import BookingOptions from './BookingOptions';
import Footer from './Footer';

function All({ role }) {
  return (
    <>
      <StudentNavbar />
      <Landing />
      <BookingOptions />
      <AboutUs/>
      <Footer />
    </>
  );
}

export default All;
