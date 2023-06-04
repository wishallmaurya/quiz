const express = require("express");
const { create, questionsByModule, updateQuestions, deleteQuestions, singleQuestions } = require("../controllers/questions.controller");
const { verifyAdmin, verifyToken } = require("../utils/validate");
const router = express.Router();

router.route("/")
    .post(verifyAdmin, create)

router.route("/:id")
    .get(verifyAdmin, singleQuestions)
    .put(verifyAdmin, updateQuestions)
    .delete(verifyAdmin,deleteQuestions)

router.route('/quiz-module/:id')
    .get(verifyToken, questionsByModule)

module.exports = router;
