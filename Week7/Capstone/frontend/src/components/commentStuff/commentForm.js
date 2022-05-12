import React, { useState } from "react";


export default function CommentForm({
    submitted, btnText, issueId, userId, addComment
  }){
    const initInputs = {comment: ""}
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
      addComment(issueId, inputs)
      setInputs(initInputs)
      submitted(prevToggle => !prevToggle)
    }
  
    const {comment} = inputs
    return (
      <form className="comments" onSubmit={handleSubmit}>
        <textarea
        name="comment" 
        value={comment} 
        onChange={handleChange}
        placeholder="Type your comment here"
        /><br/>
        <button className="pl-5 pr-5 p-1 border-2 border-blue-400 bg-blue-500 hover:bg-blue-800">{btnText}</button>
      </form>
    )
  }