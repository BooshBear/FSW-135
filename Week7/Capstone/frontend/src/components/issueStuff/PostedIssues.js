import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserProvider";
import Issue from "./Issue";


export default function PostedIssues (){
    const {issues, showIssues, updateIssue} = useContext(UserContext)
    const {issue, setIssue} = useState([issues])

    useEffect(() => {
        showIssues()
    }, [issues])
    
    return (
        <div className="issue-list">
            <h1 className="text-center text-4xl underline">Posted Issues</h1>
            <div className="grid grid-cols-3 border-2 p-4 mt-3">
                {issues.map(issue => <Issue {...issue} updateIssue={updateIssue} key={issue._id}/>)}
            </div>
        </div>
    )
}