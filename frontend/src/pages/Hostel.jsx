import React from 'react'
import StudentNavbar from '../components/StudentNavbar'
import Checkin from '../components/CheckIn'

function Hostel() {
  return (
    <div>
      <StudentNavbar />
      <Checkin to="/" buttonText="Find Hostel"/>
    </div>
  )
}

export default Hostel