import React, { useContext } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Issues from './components/Issues.js'
import { UserContext } from './context/UserProvider.js'

export default function App(){
  const { token, logout } = useContext(UserContext)

  return (
    <div className="app">
      <Navbar logout={logout}/>
      <Routes>
          <Route path="/" element={<Auth />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/issues"element={<Issues />}/>
      </Routes>
    </div>
  )
}