import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/navbar.js'
import Auth from './components/access/Auth.js'
import Profile from './components/Profile.js'
import { UserContext } from './context/UserProvider.js'
import ProtectedRoute from './components/protectedRoutes.js'
import PostedIssues from './components/issueStuff/PostedIssues.js'

export default function App(){
  const { token, logout } = useContext(UserContext)

  return (
    <div className='flex justify-center mt-10 bg-gray-50 h-screen'>
      <Navbar logout={logout}/>
      <Routes>
        <Route path="/" element={token ? (
          <Navigate replace to="/profile"/>)
          :
          (<Auth/>)
          }/>
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute token={token}>
              <Profile/>
            </ProtectedRoute>
          }
        />
        <Route path="/issues"element={<PostedIssues/>}/>
      </Routes>
    </div>
  )
}