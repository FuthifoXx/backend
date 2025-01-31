const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productImage: {
    type: String,
    required: [true, 'Please upload an image'],
  },
  productTitle: {
    type: String,
    required: true,
  },
  productDetails: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
  },
});

const productModel = mongoose.model('products', productSchema);

module.exports = productModel;
