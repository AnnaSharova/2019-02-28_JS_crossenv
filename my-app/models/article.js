const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  type: 'object',
  properties: {
    id: { type: 'integer' },
    title: {
      type: 'string',
      minLength: 1,
      maxLength: 255,
    },
    text: {
      type: 'string',
      minLength: 1,
    },
    author: { type: 'string' },
    date: {type: 'object'},
    tags: {
      type: 'array',
      items: {
        type: 'string',
        minItems: 1,
      },
    },
  },
  additionalProperties: false,
},

module.exports = mongoose.model('Articles', articleSchema);