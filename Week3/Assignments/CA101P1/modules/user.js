const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    id:{
        type: String,
        required: true
    },
    fullName:{
        type: String,
        required: true
    },
    age:{
        type: Int,
        required: true
    },
    birthDate:{
        type: Int,
        required: true
    }
})

module.exports = new mongoose.model('User', UserSchema)