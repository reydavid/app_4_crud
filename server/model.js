const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Crud = new Schema({
    who: {
        type: String,
    },
    what: {
        type: String,
    },
    where: {
        type: String,
    },
    when: {
        type: String,
    },
})

module.exports = mongoose.model("CRUD",Crud);