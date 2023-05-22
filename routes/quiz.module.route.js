const express = require("express");
const { create, getModules, updateModules, deleteModules, moduleByCategory } = require("../controllers/quiz.module.controller");
const { verifyAdmin, verifyToken } = require("../utils/validate");
const router = express.Router();

router.route("/")
    .post(verifyAdmin,create)
    .get(verifyToken,getModules)

router.route("/:id")
    .put(verifyAdmin,updateModules)
    .delete(verifyAdmin,deleteModules)

router.route('/category/:id')
    .get(verifyToken,moduleByCategory)  

module.exports = router;
