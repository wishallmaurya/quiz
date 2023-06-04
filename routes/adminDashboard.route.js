const express = require("express");
const router = express.Router();
const { dailyRegistration,  } = require("../controllers/adminDashboard.controller");
const { verifyAdmin, verifyToken } = require("../utils/validate");


router.route("/dailyRegistration")
    .get(verifyAdmin, dailyRegistration)

module.exports = router;
