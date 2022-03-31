const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InventorySchema = new Schema({
    item: string
})

module.exports = mongoose.model('Items-Inventory', InventorySchema)