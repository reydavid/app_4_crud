const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
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
  }
)

module.exports = mongoose.model('cruds', contactSchema)