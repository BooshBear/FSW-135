const express = require("express")
const app = express();
const morgan = require("morgan")
const mongoose = require('mongoose');


// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Connect to DB
main().catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb://localhost:27017/');
    console.log("Connected to the DB")
}

// Routes
app.use('/auth', require('./routes/authRoute'))

// Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.status(400).send({ errMsg: err.message})
});

app.listen(3000, () => {
    console.log(`The App is running`)
});