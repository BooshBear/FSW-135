import React, { useState, useContext } from 'react'
import AuthForm from './authForm.js'

import { UserContext } from '../../context/UserProvider.js'

const initInputs = { username: "", password: "" }

export default function Auth(){
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  const { signup, login, errMsg, resetAuthErr } = useContext(UserContext)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e){
    e.preventDefault()
    signup(inputs)
  }

  function handleLogin(e){
    e.preventDefault()
    login(inputs)
  }

  function toggleForm() {
    setToggle(prev => !prev)
    resetAuthErr()
  }
  
  return (
    <div className="flex flex-col justify-around text-center border-2 border-black shadow-xl m-8 h-72 w-80 bg-slate-500">
      <h1 className="text-xl">Climate Control</h1>
      { !toggle ?
        <>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Sign up"
            errMsg={errMsg}
          />
          <p className="text-blue-800 hover:text-black" onClick={() => toggleForm()}>Already a member?</p>
        </>
      :
        <>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login"
            errMsg={errMsg}
          />
          <p className="text-blue-700 hover:text-black" onClick={() => toggleForm()}>Not a member?</p>
        </>
      }
    </div>
  )
}