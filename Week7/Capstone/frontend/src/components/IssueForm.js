import React, {useState} from 'react'

const initInputs = {
  title: "",
  text: "",
}

export default function IssueForm({addIssue}){
  const [inputs, setInputs] = useState(initInputs);

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addIssue(inputs)
    setInputs(initInputs)
  }

  const {title, text} = inputs
  return (
    <form className="issues" onSubmit={handleSubmit}>
      <input
      type="text" 
      name="title" 
      value={title} 
      onChange={handleChange}
      placeholder="Title"/><br/>
      <textarea
      name="text" 
      value={text} 
      onChange={handleChange}
      placeholder="Type your issue here"
      />
      <button>AddIssue</button>
    </form>
  )
}