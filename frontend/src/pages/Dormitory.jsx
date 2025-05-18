import React from 'react'
import StudentNavbar from '../components/StudentNavbar.jsx'
import Checkin from '../components/Checkin.jsx'

function Dormitory() {
  return (
    <div>
      <StudentNavbar />
      <Checkin to="/" buttonText="Find Dormitory"/>
    </div>
  )
}

export default Dormitory