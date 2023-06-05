const express = require("express");
const router = express.Router();
const { dailyRegistration, dailyQuizPlayed, dailyPassedUser } = require("../controllers/adminDashboard.controller");
const { verifyAdmin, verifyToken } = require("../utils/validate");


router.route("/dailyRegistration")
    .get(verifyAdmin, dailyRegistration)
router.route("/dailyQuizPlayed")
    .get(verifyAdmin, dailyQuizPlayed)
router.route("/dailyPassedUser")
    .get(verifyAdmin, dailyPassedUser)

module.exports = router;
