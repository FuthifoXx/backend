const userModel = require('../model/userModel');
// sign up, get one user, get all users

//create user
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name && !email && !password) {
      return res.status(400).json({
        message: 'all fields must be filled',
      });
    }
    const newUser = await userModel.create({
      name,
      email,
      password,
    });
    return res.status(201).json({
      message: 'user signed up',
      data: newUser,
    });
  } catch (error) {
    console.error('unable to sign up', error);
  }
};

exports.userSignIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(404).json({
        message: 'email is required',
      });
    }
    const user = await userModel.findOne({ email });
    return res.status(200).json({
      message: 'logged in',
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'unable to process request',
      error,
    });
  }
};

//Get one by name
exports.getOneById = async (req, res) => {
  try {
    const users = await userModel.findById(req.params.id);
    return res.status(200).json({
      message: 'gotten the user',
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: "couldn't get user",
      error,
      errorMsg: error.message,
    });
  }
};

//get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    return res.status(200).json({
      message: 'gotten all users',
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: "couldn't get users",
      error,
    });
  }
};

//update method
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, password } = req.body;
    const update = await userModel.findByIdAndUpdate(
      req.params.id,
      { name, password },
      { new: true }
    );
    return res.status(200).json({
      message: 'user updated',
      data: update,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'failed to update user',
      error,
    });
  }
};

//delete method
exports.getOneAndDelete = async (req, res) => {
  try {
    const { name } = req.body;
    const users = await UserModel.findOneAndDelete({ name });
    return res.status(200).json({
      message: 'user deleted',
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: "couldn't delete user",
      error,
    });
  }
};

//delete method
exports.deleteUser = async (req, res) => {
  try {
    const removeUser = await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: 'user deleted',
      data: removeUser,
    });
  } catch (error) {
    return res.status(400).json({
      message: "couldn't delete user",
      error,
    });
  }
};
