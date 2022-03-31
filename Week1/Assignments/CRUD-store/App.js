const express = require("express")
const app = express();
const morgan = require("morgan")
const mongoose = require('mongoose')

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Connect to DB
mongoose.connect('mongodb://localhost:27017/Items-Inventory',
    {
        
    },
    () => console.log("connected to the DB")
)

app.listen(3000, () => {
    console.log("The App is running in port 3000")
});