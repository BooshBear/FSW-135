const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    issueid:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Comment', commentSchema)