const express = require("express");
const { list, create, update, remove } = require("../controllers/category.controller");
const router = express.Router();

const { verifyToken, verifyAdmin } = require('../utils/validate')

router.route("/")
    .post(verifyAdmin, create)
    .get(verifyToken,list)

router.route("/:id")
    .put(verifyAdmin, update)
    .delete(verifyAdmin , remove)
    
module.exports = router;
