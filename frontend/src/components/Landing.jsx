import React from 'react';
import StudentNavbar from './StudentNavbar';
import AdminNavbar from './AdminNavbar';

function Landing({ role }) {
  return (
    <>
      {role === 'student' && <StudentNavbar />}
      {role === 'admin' && <AdminNavbar />}
    </>
  );
}

export default Landing;
