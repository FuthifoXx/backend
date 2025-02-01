//upload products, get all products, get one product, update (status: false), delete product

const productModel = require('../model/productModal');
const userModel = require('../model/userModel');
const cloudinary = require('../config/cloudinary');

//upload-product
exports.createProducts = async (req, res) => {
  try {
    const { productImage, productTitle, productDetails, price, status } =
      req.body;
    const getUserId = await userModel.findById(req.params.userId);

    const upload = await cloudinary.uploader.upload(req.file.path);

    const product = await productModel.create({
      productImage: upload.secure_url,
      productTitle,
      productDetails,
      price,
    });
    console.log(getUserId);
    getUserId.products.push(product?._id);
    getUserId.save();

    return res.status(201).json({
      message: 'order added to your list',
      data: product,
    });
  } catch (error) {
    console.log('unable to place your order', error);
  }
};

// /get-all-products,
exports.getAll = async (req, res) => {
  try {
    const products = await productModel.find();
    return res.status(201).json({
      message: 'Total Products',
      data: products,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Product not found',
      error,
    });
  }
};

// /get-one-product/:id
exports.getOneById = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    return res.status(200).json({
      message: 'Product Found',
      data: product,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Product not found',
      error,
    });
  }
};
// /update-product
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const update = await productModel.findByIdAndUpdate(
      id,
      { status: false },

      { new: true }
    );
    return res.status(202).json({
      message: 'product updated',
      data: update,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'failed to update item',
      error,
    });
  }
};

// /delete-products
exports.deleteProduct = async (req, res) => {
  try {
    const removeItem = await productModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: 'item deleted',
      data: removeItem,
    });
  } catch (error) {
    return res.status(400).json({
      message: "couldn't delete Product",
      error,
    });
  }
};
