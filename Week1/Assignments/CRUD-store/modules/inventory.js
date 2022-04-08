const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    id:{
        type: String,
        required: true
    },
    item:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Items-Inventory', inventorySchema)