import React, { useContext } from 'react'
import IssueForm from './IssueForm.js'
import { UserContext } from '../context/UserProvider.js'

export default function Profile(){
  const { user: {username}, addIssue} = useContext(UserContext)

  return (
    <div className="profile">
      <h1>Welcome {username}!</h1>
      <h3>Add A Issue</h3>
      <IssueForm addIssue={addIssue}/>
      <h3>Your Posted Issues</h3>
    </div>
  )
}