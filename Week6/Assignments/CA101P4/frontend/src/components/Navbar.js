import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

export default function Navbar({ logout }){
  const { token } = useContext(UserContext)
  return (
    <div className="navbar">
      {token && <Link to="/profile">Profile</Link>}
      <Link to="/issues">Issues</Link>
      {!token && <Link to="/">SignUp/Signin</Link>}
      {token && <button onClick={logout}>Logout</button>}
    </div>
  )
}