const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const port = '3500';

let Crud = require('./model');

mongoose.connect('mongodb+srv://david:davidtest123@cluster0.00hbc.mongodb.net/app_4_crud?retryWrites=true&w=majority', {useNewUrlParser:true})

app.use(cors());
app.use(bodyParser.json());

const connection = mongoose.connection;
connection.once('open', function(){
    console.log('Mongoose connection established...')
})

app.get('/', function(req,res){
    console.log("root");
    res.send({message:"Server is running..."})
});

app.listen(port,function(req,res){
    console.log("Listening on port",port);
});