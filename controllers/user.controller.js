require("dotenv").config();
const userModel = require("../models/users.model");
const bcrypt = require("bcrypt");
const { createError } = require("../utils/error");
const { hashSync, genSaltSync } = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res, next) => {
  let user;
  let savedUser;
  try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const isUser = await userModel.findOne({username: req.body.username})
      if(isUser){
          return res.status(400).send({
              success: false,
              data: null,
              message:"Username already exist"
          })
      }else{
      user = new userModel({
          username: req.body.username,
          email: req.body.email,
          password: hash,
          address: req.body.address,
          selectedLanguage:'English',
          referralCode: req.body.username.toLowerCase().slice(0, 4) + (Math.floor(Math.random() * 9999) + 1000)
      })
      savedUser = await user.save();
      if(req.body.referedBy){
          const referedUser = await userModel.findOneAndUpdate({ referralCode: req.body.referedBy }, {
              $push: {
                  rewards: {
                      rewardType: "referral",
                      code: req.body.referedBy,
                      points: process.env.REFERRAL_POINTS ,
                      date: new Date(),
                  }
              }
          }, { new: true })
          if(!referedUser){
              return res.status(400).send({
                  success:false,
                  data:null,
                  message:"Referral code is not valid"
              })
          }
      }
  }
      
      savedUser.password = undefined;
      res.status(200).send({
          success: true,
          data: savedUser,
          message: "User created successfully"
      })
  } catch (error) {
      next(error)
  }
}

exports.getUsers = async (req, res, next) => {
  try {
    const data = await userModel.find({}, { password: 0 });
    res.status(200).json({
      success: true,
      data,
      message: "Users fetched successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.updateById = async (req, res, next) => {
  const { id } = req.params;
  let hashPassword;
  const { username, address, password, selectedLanguage } = req.body;
  if (password) {
    const salt = genSaltSync(10);
    hashPassword = hashSync(password, salt);
  }
  try {
    let updated;
    const options = {
      new: true,
    };
    if (req.file) {
      const baseUrl = `${req.protocol}://${req.headers.host}`;
      const fullPath = `${baseUrl}/uploads/${req.file?.filename}`;
      updated = await userModel.findByIdAndUpdate(
        id,
        {
          profilePhoto: fullPath,
          password: hashPassword,
          username,
          address,
          selectedLanguage,
        },
        options
      );
    } else {
      updated = await userModel.findByIdAndUpdate(
        id,
        {
          password: hashPassword,
          username,
          address,
          selectedLanguage,
        },
        options
      );
    }
    updated.password = undefined;
    res.status(200).send({
      success: true,
      data: updated,
      message: "User updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const deleted = await userModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      data: deleted,
      message: "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.UserSignIn = async (req, res, next) => {
  try {
    const { username } = req.body;
    const user = await userModel.findOne({
      $or: [{ username: username }, { email: username }],
    });
    if (!user) return next(createError(404, "User not found!"));
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) return next(createError(400, "Wrong password"));
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT);
    console.log(token, "pass");
    const { password, ...options } = user._doc;
    res.status(200).json({
      success: true,
      data: { token, ...options },
      message: "Logged In Successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = req.user;
    const User = await userModel.findById(user.id, { password: 0, role: 0 });
    res.status(200).json({
      success: true,
      data: User,
      message: "User fetched successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.updatePassword = async (req, res, next) => {
  const { id } = req.params;
  const user = await userModel.findById(id);
  if (!user) return next(createError(404, "User not found!"));
  
  const { password, newPassword } = req.body;
  if (!password)   return next(createError(400, " password invalid"));
  if (!newPassword)   return next(createError(400, "new password invalid"));

  const isPasswordCorrect = await bcrypt.compare(
    password,
    user.password
  );
  if (!isPasswordCorrect){
    res.status(200).send({
        success: false,
        message: "Incorrect Password",
      });
  }


  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(newPassword, salt);

  let username=user.username
  let address=user.address
  let selectedLanguage=user.selectedLanguage
  try {
    let updated;
    const options = {
      new: true,
    };
    if (req.file) {
      const baseUrl = `${req.protocol}://${req.headers.host}`;
      const fullPath = `${baseUrl}/uploads/${req.file?.filename}`;
      updated = await userModel.findByIdAndUpdate(
        id,
        {
          profilePhoto: fullPath,
          password: hashPassword,
          username,
          address,
          selectedLanguage,
        },
        options
      );
    } else {
      updated = await userModel.findByIdAndUpdate(
        id,
        {
          password: hashPassword,
          username,
          address,
          selectedLanguage,
        },
        options
      );
    }
    updated.password = undefined;
    res.status(200).send({
      success: true,
      data: updated,
      message: "Password Updated",
    });
  } catch (error) {
    next(error);
  }
};


exports.getSingleUser = async (req, res, next) => {
    try {
      const id = req.params.id;
      const user = await userModel.findById(id);
      if(!user){
        res.status(200).json({
            success: false,
            message: "User not Found",
          });
      }
      res.status(200).json({
        success: true,
        data: user,
        message: "User fetched successfully",
      });
    } catch (error) {
      next(error);
    }
  };
  