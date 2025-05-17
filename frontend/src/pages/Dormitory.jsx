import React from 'react'
import StudentNavbar from '../components/StudentNavbar'
import Checkin from '../components/CheckIn'

function Dormitory() {
  return (
    <div>
      <StudentNavbar />
      <Checkin to="/" buttonText="Find Dormitory"/>
    </div>
  )
}

export default Dormitory