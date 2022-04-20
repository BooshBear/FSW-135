const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    userid:{
        type: String,
        required: true
    },
    ticket:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Issue', issueSchema)