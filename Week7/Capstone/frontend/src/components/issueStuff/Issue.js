import React, {useState, useEffect} from 'react'
import CommentForm from '../commentStuff/commentForm';
import IssueForm from './issueForm';

export default function Issue({
  issue, text, upvote, downvote, deleteIssue, updateIssue, addComment, userId, _id
}){
  const initInputs = {upvote: upvote || 0, downvote: downvote || 0}
  const [editToggle, setEditToggle] = useState(false);
  const [comment, setComment] = useState(false);
  const [counter, setCounter] = useState(initInputs);


  
  const call = () => {if (deleteIssue != null) {
  return (
  <>
    <button className="pl-5 pr-5 p-1 border-2 border-blue-400 bg-blue-500 hover:bg-blue-800" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>  
    <button className="pl-5 pr-5 p-1 border-2 border-red-400 bg-red-500 hover:bg-red-800" onClick={() => deleteIssue(_id)}>DELETE</button>
  </>
  )
  } else {
    return (
      <>
        {!comment ?
        <>
          <button className="pl-5 pr-5 p-1 border-2 border-green-400 bg-green-500 hover:bg-green-800" onClick={() => setComment(prevToggle => !prevToggle)}>Make a Comment</button>
        </>
        :
        <>
          <CommentForm addComment={addComment} submitted={setComment} userId={userId} issueId={_id} btnText="Submit Comment"/>
          <button className="pl-5 pr-5 p-1 border-2 border-red-400 bg-red-500 hover:bg-red-800" onClick={() => setComment(prevToggle => !prevToggle)}>Cancel</button>
        </>
        }
      </>
  )}}

  return (
    <div className='flex flex-col border-2 border-black m-2 p-4'>
      {!editToggle ? 
      <>
        <h1>ID: {_id}</h1>
        <h1>Issue: {issue}</h1>
        <h3>Description: {text}</h3>
        <button className="self-center w-28 p-[2px] text-white bg-gray-500 
        hover:border-2 rounded-md hover:border-cyan-700"
        onClick={() => updateIssue(_id, {upvote: (upvote+1)})}>Upvote</button>
        <p className="text-center">{upvote}</p> <br/>
        <button className="self-center w-28 p-[2px] text-white bg-gray-500 
        hover:border-2 rounded-md hover:border-cyan-700"
        onClick={() => updateIssue(_id, {downvote: (downvote+1)})}>DownVote</button>
        <p className="text-center">{downvote}</p> <br/>
        <div className="flex justify-between">{call()}</div>
      </>
      :
      <>
        <IssueForm
          editIssue={issue}
          editText={text}
          edit_id={_id}
          updateIssue={updateIssue}
          submitted={setEditToggle}
          btnText='Submit Edit'
        />
        <button className="pl-5 pr-5 p-1 mt-2 border-2 border-blue-400 bg-blue-500 hover:bg-blue-800" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
      </>
      }
    </div>  
  )
}