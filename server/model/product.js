const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  productName: { type: String, default: 0, required: true },
  productCategory: { type: String, default: 0, required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('product', productSchema);
