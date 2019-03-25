const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  type: 'object',
  properties: {
    id: { type: 'integer' },
    user_id: { type: 'integer' },
    goods: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        properties: {
          good_id: { type: 'integer'},
          good_price: {type: 'float'},
          quantity: {
            type: 'integer',
            min: 1,
          }
        }
      }
    },
    date: { type: 'object' },
    sum: { type: 'float' },
    status: {type: 'integer'},
  },
  additionalProperties: false,
},

module.exports = mongoose.model('Purchase', purchaseSchema);