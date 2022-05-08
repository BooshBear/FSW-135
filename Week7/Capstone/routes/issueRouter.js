const express = require("express");
const Issue = require("../modules/issue");
const issueRouter = express.Router();

// Get All issue
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
  issueRouter.get("/user", (req, res, next) => {
    Issue.find({ user: req.user._id }, (err, issues) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(issues)
    })
  })
  
  // Add new issue
  issueRouter.post("/", (req, res, next) => {
    console.log(req.user)
    req.body.user = req.user._id
    const newIssue = new issue(req.body)
    newIssue.save((err, savedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedIssue)
    })
  })
  
  // Delete issue
  issueRouter.delete("/:issueId", (req, res, next) => {
    Issue.findOneAndDelete(
      { _id: req.params.issueId, user: req.user._id },
      (err, deletedIssue) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(`Successfully delete the Issue: ${deletedIssue.title}`)
      }
    )
  })
  
  // Update Issue
  issueRouter.put("/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
      { _id: req.params.issueId, user: req.user._id },
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