import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <div className="navbar">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/schedule">Schedule</Link>
      </li>
      <li>
        <Link to="/art">Art</Link>
      </li>
    </ul>
  </div>
)

export default Navbar
