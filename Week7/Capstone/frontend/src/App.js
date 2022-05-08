import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import { UserContext } from './context/UserProvider.js'
import ProtectedRoute from './components/ProtectedRoutes.js'
import IssueForm from './components/IssueForm.js'

export default function App(){
  const { token, logout } = useContext(UserContext)

  return (
    <div className="app">
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
        <Route path="/issues"element={<IssueForm />}/>
      </Routes>
    </div>
  )
}