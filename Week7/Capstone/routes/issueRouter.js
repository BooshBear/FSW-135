const express = require("express");
const issueRouter = express.Router();
const Issue = require("../modules/issue");

// Get All Issues
issueRouter.get("/", (req, res, next) => {
    Issue.find((err, issues) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(issues)
    })
  })
  
  // Get issue by user id
  issueRouter.get("/user/:userId", (req, res, next) => {
    const userId = req.params.userId
    Issue.find({ user: userId }, (err, issues) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(issues)
    })
  })
  
  // Add new Issue
  issueRouter.post("/:userId", (req, res, next) => {
    const userId = req.params.userId
    req.body.user = userId
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedIssue)
    })
  })
  
  // Delete Issue
  issueRouter.delete("/:issueId", (req, res, next) => {
    Issue.findOneAndDelete(
      { _id: req.params.issueId},
      (err, deletedIssue) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(`Successfully delete the Issue: ${deletedIssue}`)
      }
    )
  })
  
  // Update Issue
  issueRouter.put("/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
      { _id: req.params.issueId},
      req.body,
      { new: true },
      (err, updatedIssue) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedIssue)
      }
    )
  })

module.exports = issueRouter