const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InventorySchema = new Schema({
    id:{
        type: String,
        required: true
    },
    item:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Items-Inventory', InventorySchema)