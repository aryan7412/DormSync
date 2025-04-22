import React from 'react';
import StudentNavbar from './StudentNavbar';
import AdminNavbar from './AdminNavbar';
import Landing from './Landing';
import AboutUs from './AboutUs'
import BookingOptions from './BookingOptions';

function All({ role }) {
  return (
    <>
      {role === 'student' && <StudentNavbar />}
      {role === 'admin' && <AdminNavbar />}
      <Landing />
      <BookingOptions />
      <AboutUs/>
    </>
  );
}

export default All;
