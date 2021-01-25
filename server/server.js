const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const port = '3500';
const connection = mongoose.connection;
const crudRoutes = express.Router();
let crud = require('./model');

mongoose.connect('mongodb+srv://david:davidtest123@cluster0.00hbc.mongodb.net/app_4_crud?retryWrites=true&w=majority', {useNewUrlParser:true})
connection.once('open', function(){
    console.log('Mongoose connection established...')
});

app.use(cors());
app.use(bodyParser.json());

crudRoutes.route('/').get(function(req,res){
    res.send({message: "crudRoutes!"});
});

crudRoutes.route('/add').post(function(req,res){
    let testCrud = {
        who: "TestWho",
        what: "TestWhat",
        where: "TestWhere",
        when: "TestWhen"
    }
    
    let newCrud = new crud(testCrud);
    newCrud.save()
    .then(crud => {
        res.json({'crud': "added successfully"});
    })
    .catch(err => {
        res.send(err);
    })
    res.send(req.body);
})

app.get('/', function(req,res){
    console.log("root");
    res.send({message:"Server is running..."})
});

app.listen(port,function(req,res){
    console.log("Listening on port",port);
});