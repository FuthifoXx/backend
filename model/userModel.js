const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please enter your name'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'please enter a valid email'],
  },
  password: {
    type: String,
    default: true,
  },
  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'products',
    },
  ],
});

const userModel = mongoose.model('all-users', userSchema);

module.exports = userModel;
