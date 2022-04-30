const express = require("express");
const app = express();
require('dotenv').config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const { expressjwt: jwt } = require('express-jwt');

const PORT = 9080;

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Connect to DB
main().catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb://localhost:27017/'),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true
    };
    console.log("Connected to the DB")
}

// Routes
app.use('/auth', require('./routes/authRoute'))
app.use('/api', jwt({ secret: process.env.SECRET, algorithms: ['HS256']})) // req.user

// Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.status(400).send({ errMsg: err.message})
});

app.listen(PORT, () => {
    console.log(`The App is running at port ${PORT}`)
});