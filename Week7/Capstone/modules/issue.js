const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    issue:{
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    upvote: {
        type: Number,
        required: true
    },
    downvote: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Issue", issueSchema)