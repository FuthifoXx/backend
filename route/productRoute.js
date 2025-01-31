const productController = require('../controller/productController');
const express = require('express');
const upload = require('../config/multer');
const userRoutes = require('./userRoute');
const productRoutes = express.Router();

productRoutes.post(
  '/new-products',
  upload.single('productImage'),
  productController.createProducts
);
productRoutes.get('/get-all-products', productController.getAll);
productRoutes.get('/get-one-product/:id', productController.getOneById);
productRoutes.patch('/update-product/:id', productController.updateProduct);
productRoutes.delete('/delete-product/:id', productController.deleteProduct);

//products
userRoutes.post('/create-product/:userId', uploadProduct);

module.exports = productRoutes;
