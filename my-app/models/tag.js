const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  type: 'object',
  properties: {
    id: { type: 'integer' },
    name: {
      type: 'string',
      minLength: 1,
      maxLength: 50,
    },
  },
},

module.exports = mongoose.model('Tag', tagSchema);