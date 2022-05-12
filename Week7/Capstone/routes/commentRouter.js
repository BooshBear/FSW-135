const express = require("express");
const commentRouter = express.Router();
const Comment = require("../modules/comment");

commentRouter.post("/:issueId", (req, res, next) => {
    const issueId = req.params.issueId
    req.body.user = issueId
    const newComment = new Comment(req.body)
    newComment.save((err, savedComment) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedComment)
    })
})

module.exports = commentRouter