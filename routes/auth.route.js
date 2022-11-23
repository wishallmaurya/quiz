const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/auth.controller");

router.post("/signin", login);
router.post("/create-admin", register);

module.exports = router;
