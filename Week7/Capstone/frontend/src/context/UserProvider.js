import React, { useState } from 'react'
import axios from 'axios'
export const UserContext = React.createContext()

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props){
  const initState = { 
    user: JSON.parse(localStorage.getItem("user")) || {}, 
    token: localStorage.getItem("token") || "",
    errMsg: '',
    issues: [],
    comments: []
  }
  const [userState, setUserState] = useState(initState)

  function handleAuthErr(errMsg) {
      setUserState(prevState => ({
        ...prevState,
        errMsg
      }))
    }

  function signup(credentials){
    axios.post("/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  function resetAuthErr() {
    setUserState(prevState => ({
      ...prevState,
      errMsg: ''
    }))
  }

  function login(credentials){
    axios.post("/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        usersIssues(user._id)
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
      issues: []
    })
  }

  function showIssues() {
    userAxios.get('/api/issue')
    .then(res => {
      setUserState(prevState => ({
        ...prevState,
        issues: res.data
      }))
    })
    .catch(err => console.log(err.response.data.errMsg))
  }

  function usersIssues(userId) {
    userAxios.get(`/api/issue/user/${userId}`)
    .then(res => {
      setUserState(prevState => ({
        ...prevState,
        issues: res.data
      }))
    })
    .catch(err => console.log(err.response.data.errMsg))
  }

  function addIssue(userId, newIssue) {
    userAxios.post(`/api/issue/${userId}`, newIssue)
    .then(res => {
      setUserState(prevState => ({
        ...prevState,
        issues: [...prevState.issues, res.data]
      }))
    })
    .catch(err => console.log(err.response.data.errMsg))
  }

  function deleteIssue(issueId) {
    userAxios.delete(`/api/issue/${issueId}`)
    .then(res => {
      setUserState(prevState => ({
        ...prevState,
        issues: [res.data]
      }))
    })
    .catch(err => console.log(err.response.data.errMsg))
  }

  function updateIssue(issueId, editedIssue) {
    userAxios.put(`/api/issue/${issueId}`, editedIssue)
    .then(res => {
      setUserState(prevState => ({
        ...prevState,
        issues: [res.data]
      }))
    })
    .catch(err => console.log(err.response.data.errMsg))
  }

  function addComment(issueId, newComment) {
    userAxios.post(`/api/comment/${issueId}`, newComment)
    .then(res => {
      setUserState(prevState => ({
        ...prevState,
        comments: [...prevState.comment, res.data]
      }))
    })
    .catch(err => console.log(err.response.data.errMsg))
  }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup, login, logout,
        resetAuthErr,
        addIssue, usersIssues, showIssues, deleteIssue, updateIssue,
        addComment}}>
      { props.children }
    </UserContext.Provider>
  )
}