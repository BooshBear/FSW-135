import React, {useState} from 'react'


export default function IssueForm({
  addIssue, updateIssue, upvote, downvote, userId, editIssue, editText, edit_id, btnText, submitted
}){
  const initInputs = {issue: editIssue || "", text: editText || "",
  upvote: upvote || 0, downvote: downvote || 0
  }
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
    if (!userId) {
      updateIssue(edit_id, inputs)
    } else {
      addIssue(userId, inputs)
    }
    setInputs(initInputs)
    submitted(prevToggle => !prevToggle)
  }

  const {issue, text} = inputs
  return (
    <form className="flex flex-col border-2 border-gray-800 p-2" onSubmit={handleSubmit}>
      <input
      className="border-2 border-gray-700 p-1 "
      type="text" 
      name="issue" 
      value={issue} 
      onChange={handleChange}
      placeholder="Issue Title"/><br/>
      <textarea
      className="border-2 h-40 text"
      name="text" 
      value={text} 
      onChange={handleChange}
      placeholder="Type your issue here"
      /><br/>
      <button className="border-2 border-black p-2 bg-slate-300 hover:bg-slate-400 hover:rounded-xl">{btnText}</button>
    </form>
  )
}