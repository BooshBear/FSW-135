import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider.js'
import IssuesList from './issueStuff/issueList.js'
import IssueForm from './issueStuff/issueForm.js'

export default function Profile(){
  const { user: {username, _id},
  addIssue, addComment, usersIssues, deleteIssue, updateIssue, issues} = useContext(UserContext)

  return (
    <div className="">
      <h1 className="text-lg text-center">Welcome {username}!</h1>
      <h3 className="text-center">Add A Issue</h3>
      <IssueForm addIssue={addIssue} btnText='Add Issue' userId={_id}/>
      <h3 className="text-center underline text-lg mb-2">Your Posted Issues</h3>
      <IssuesList issues={issues} usersIssues={usersIssues} 
      userId={_id} updateIssue={updateIssue}  deleteIssue={deleteIssue} 
      addComment={addComment}/>
    </div>
  )
}