const express = require('express');
const { createMembership, getMemberships, updateMemberships, deleteMemberships } = require('../controllers/membership.controller');
const router = express.Router()
const { verifyAdmin, verifyToken } = require("../utils/validate");

router.route('/')
    .post(verifyAdmin, createMembership)
    .get(verifyToken, getMemberships)

router.route('/:id')
    .put(verifyAdmin, updateMemberships)
    .delete(verifyAdmin, deleteMemberships)

module.exports = router