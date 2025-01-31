const cloudinary = require('cloudinary').v2;

// Cloudinary Configuration
cloudinary.config({
  cloud_name: 'dzsydfzia', //enter your cloud name
  api_key: '698686636999158', //enter your api_key
  api_secret: 'D7eNdXlVJhYuMMI5MrLrZ5X8vds', // enter your api_secret
  secure: true,
});

module.exports = cloudinary;
