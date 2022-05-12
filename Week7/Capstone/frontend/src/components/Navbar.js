import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

export default function Navbar({ logout }){
  const { token } = useContext(UserContext)
  return (
    <div className="fixed justify-around top-0 h-10 w-screen m-0
    flex-col bg-gray-800 text-white shadow-lg">
      <div className="flex justify-around items-center h-10 m-0 top-0">
        {token && <Link className="pl-2 pr-2 p-[2px] bg-gray-700 hover:border-2 rounded-md hover:border-cyan-700" to="/profile">Profile</Link>}
        {token && <Link className="pl-2 pr-2 p-[2px] bg-gray-700 hover:border-2 rounded-md hover:border-cyan-700" to="/issues">Issues</Link>}
        {!token && <Link className="pl-2 pr-2 p-[2px] bg-gray-700 hover:border-2 rounded-md hover:border-cyan-700" to="/">SignUp/Signin</Link>}
        {token && <button className="pl-2 pr-2 p-[2px] bg-gray-700 hover:border-2 rounded-md hover:border-cyan-700" onClick={logout}>Logout</button>}
      </div>
    </div>
  )
}