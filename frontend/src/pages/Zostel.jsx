import React from 'react'
import Checkin from '../components/Checkin.jsx'
import StudentNavbar from '../components/StudentNavbar.jsx'

function Zostel() {
  return (
    <div>
      <StudentNavbar />
      <Checkin to="/" buttonText="Find Zostel"/>
    </div>
  )
}

export default Zostel