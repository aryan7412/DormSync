import React from 'react'
import StudentNavbar from '../components/StudentNavbar.jsx'
import Checkin from '../components/CheckIn.jsx'

function Hostel() {
  return (
    <div>
      <StudentNavbar />
      <Checkin to="/" buttonText="Find Hostel"/>
    </div>
  )
}

export default Hostel