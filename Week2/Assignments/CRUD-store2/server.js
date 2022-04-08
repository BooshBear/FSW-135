const express = require("express")
const morgan = require("morgan")
const mongoose = require('mongoose');
const invRouter = require("./routes/inventoryRoute");
const app = express();

// Connect to DB
main().catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb://localhost:27017/moviesDB');
    console.log("Connected to the DB")
}

// Middleware
app.use(express.json())
app.use(morgan('dev'))

const PORT = '3000';

app.use('/invItems', invRouter);

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.status(400).send({ errMsg: err.message})
});

app.listen(PORT, () => {
    console.log(`The App is running in port ${PORT}`)
});