const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  type: 'object',
  properties: {
    id: { type: 'integer' },
    first_name: {
      type: 'string',
      minLength: 1,
      maxLength: 50,
    },
    second_name: {
      type: 'string',
      minLength: 1,
      maxLength: 50,
    },
    contacts: { type: 'string' },
  },
  additionalProperties: false,
},

module.exports = mongoose.model('User', userSchema);
//module.exports = model;