const Admin = require("../models/admin.model");
const userModel = require("../models/users.model");
const Result = require("../models/result.model");

const { createError } = require("../utils/error");

exports.dailyRegistration = async (req, res, next) => {
  try {
    let start = new Date();
    start.setHours(0, 0, 0, 0);

    let end = new Date();
    end.setHours(23, 59, 59, 999);

    const data = await userModel.find({ createdAt: { $gte: start, $lt: end } });
    res.status(200).json({
      success: true,
      data,
      message: "Users fetched successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.dailyQuizPlayed = async (req, res, next) => {
  try {
    let start = new Date();
    start.setHours(0, 0, 0, 0);

    let end = new Date();
    end.setHours(23, 59, 59, 999);

    const data = await Result.find({ createdAt: { $gte: start, $lt: end } })
      .populate("userId quizModule")
      .sort({ createdAt: -1 });
    // const data = await Result.find({ createdAt: {$gte: start, $lt: end} });
    res.status(200).json({
      success: true,
      data,
      message: "Result fetched successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.dailyPassedUser = async (req, res, next) => {
  try {
    let start = new Date();
    start.setHours(0, 0, 0, 0);

    let end = new Date();
    end.setHours(23, 59, 59, 999);

//!problem is score--

    const data = await Result.find({
      createdAt: { $gte: start, $lt: end },
      score: { $gte: 2 },
    })
      .populate("userId quizModule")
      .sort({ createdAt: -1 });
    // const data = await Result.find({ createdAt: {$gte: start, $lt: end} });
    res.status(200).json({
      success: true,
      data,
      message: "Result fetched successfully",
    });
  } catch (error) {
    next(error);
  }
};
