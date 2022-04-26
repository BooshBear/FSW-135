import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ logout }){

  return (
    <div className="navbar">
      <Link to="/profile">Profile</Link>
      <Link to="/issues">Issues</Link>
      <Link to="/">SignUp/Signin</Link>
      <button onClick={logout}>Logout</button>
    </div>
  )
}