const express = require("express");
const app = express();
require('dotenv').config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const { expressjwt: jwt } = require('express-jwt');

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Connect to DB
main().catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb://localhost:27017/test'),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    };
    console.log("Connected to the DB");
};

// Routes
app.use('/auth', require('./routes/authRouter'));
app.use('/api', jwt({ secret: process.env.SECRET, algorithms: ['HS256']})); // req.user
app.use('/api/issue', require('./routes/issueRouter.js'));
app.use('/api/comment', require('./routes/commentRouter.js'));

// Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.status(400).send({ errMsg: err.message})
});

app.listen(9000, () => {
    console.log(`The App is running at port 9000`)
});