const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
// const dbConfig = require('./database/db');
const uri = "mongodb+srv://david:davidtest123@cluster0.00hbc.mongodb.net/app_4_crud?retryWrites=true&w=majority";
// Express Route
const contactRoute = require('./routes/contact.route')

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(uri, {
useNewUrlParser: true,
useUnifiedTopoloty: true
}).then(() => {
console.log('Database sucessfully connected!')
},
error => {
console.log('Could not connect to database : ' + error)
}
)

const app = express(); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}));
app.use(cors());
app.use('/api', contactRoute)


// PORT
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Server is connected" });
  });
// 404 Error
app.use((req, res, next) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Server Started!');
    // next(createError(404));
});

app.use(function (err, req, res, next) {
console.error(err.message);
if (!err.statusCode) err.statusCode = 500;
res.status(err.statusCode).send(err.message);
});