let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

// Express Route
const contactRoute = require('./routes/contact.route')

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
useNewUrlParser: true
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
const port = process.env.PORT || 3500;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my web server." });
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