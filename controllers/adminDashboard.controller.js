const Admin = require("../models/admin.model");
const userModel = require("../models/users.model");
const { createError } = require("../utils/error");

exports.dailyRegistration = async (req, res, next) => {
  try {
    let start = new Date();
    start.setHours(0, 0, 0, 0);

    let end = new Date();
    end.setHours(23, 59, 59, 999);

    const data = await userModel.find({ createdAt: {$gte: start, $lt: end} });
    res.status(200).json({
      success: true,
      data,
      message: "Users fetched successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.register = async (req, res, next) => {
  console.log("admin up");
  try {
  } catch (err) {
    next(err);
  }
};
