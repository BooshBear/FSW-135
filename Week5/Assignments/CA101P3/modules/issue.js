const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    issue:{
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment",
        required: true
    }
})

module.exports = mongoose.model('Issue', issueSchema)