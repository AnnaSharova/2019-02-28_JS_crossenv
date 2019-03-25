const mongoose = require('mongoose');

const goodSchema = new mongoose.Schema({
  type: 'object',
  properties: {
    id: { type: 'integer' },
    title: {
      type: 'string',
      minLength: 1,
      maxLength: 255,
    },
    description: {
      type: 'string',
      minLength: 1,
    },
    images: { 
        type: 'array',
        minItems: 1,
        maxItems: 10,
        items: { type: 'string'}
    },
    price: { 
        type: 'float',
        min: 0,
    },
    availability: { type: 'boolean' },
  },
  additionalProperties: false,
},

module.exports = mongoose.model('Goods', goodSchema);