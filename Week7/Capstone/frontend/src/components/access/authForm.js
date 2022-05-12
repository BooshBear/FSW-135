import React from 'react'

export default function AuthForm(props){
  const {
    handleChange, 
    handleSubmit, 
    btnText, 
    errMsg,
    inputs: {
      username, 
      password
    } 
  } = props
  
  return (
    <form className='flex flex-col justify-around items-center' onSubmit={handleSubmit}>
      <input 
        className="border-2 border-black p-1"
        type="text" 
        value={username} 
        name="username" 
        onChange={handleChange} 
        placeholder="Username"/><br/>
      <input
        className="border-2 border-black p-1"
        type="password" 
        value={password} 
        name="password" 
        onChange={handleChange} 
        placeholder="Password"/><br/>
      <button className="border-2 border-gray-600 bg-gray-200 p-1 hover:bg-gray-300">{ btnText }</button>
      <p style={{backgroundColor: "#c00000", color: "#ffffff"}}>{ errMsg }</p>
    </form>
  )
}