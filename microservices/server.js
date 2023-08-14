const express = require("express")
const cors = require("cors");
const app =  express();
const mongoose = require("mongoose");
const route = require('./routes/tweet')
require('dotenv').config();

const uri = process.env.MONGO_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
  //   useCreateIndex: true,
    useUnifiedTopology: true
});
  
const connection = mongoose.connection;
connection.once('open', () => {
console.log('MongoDB database connection established successfully');
});

app.use(cors());
app.use(express.json());
app.use('', route);

app.listen(5000,()=>{
    console.log("server running")
})