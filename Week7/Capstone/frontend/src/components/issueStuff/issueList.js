import React, {useState, useEffect} from "react";
import Issue from "./Issue.js";
import { v4 as uuidv4 } from 'uuid';

export default function IssuesList({issues, addComment, usersIssues, userId, deleteIssue, updateIssue}) {
    const [issue, setIssue] = useState([issues])
    
    useEffect(() => {
        usersIssues(userId)
    }, [issues])
    
    if (issue != null) {
        return(
        <div className="grid grid-cols-3 border-2 p-4">
            {issues.map(issue => <Issue {...issue} deleteIssue={deleteIssue} addComment={addComment} updateIssue={updateIssue} userId={userId} key={uuidv4()}/>)}
        </div>
    )} else {
        return (
            <h1>Loading...</h1>
        )
    } 
}