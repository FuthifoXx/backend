const { uploadProduct } = require('../upload');
const userController = require('../controller/userController');
const express = require('express');
const multer = require('../config/cloudinary');
const cloudinary = require('../config/cloudinary');

const userRoutes = express.Router();

userRoutes.post('/new-user', userController.createUser);
userRoutes.get('/login', userController.userSignIn);
userRoutes.get('/get-one-user/:id', userController.getOneById);
userRoutes.get('/get-all-users', userController.getAllUsers);
userRoutes.patch('/update-user/:id', userController.updateUser);
userRoutes.delete('/delete-user-name', userController.getOneAndDelete);
userRoutes.delete('/delete-user/:id', userController.deleteUser);

userRoutes.post('/create-product/:userId', uploadProduct);

module.exports = userRoutes;

// ASSIGNMENT

// -deploy your backend application and send me the URL via my mail (on or before Thursday)

// -Upload at least 20 products

// -design a simple landing page

// -design a simple auth page (user sign up)

// -design a product/catalog page

// [1:57 PM] Ogbu Esther Uzoma
// deploy the frontend and send me the deployed URL via my mail on or before Friday 3:30pm
