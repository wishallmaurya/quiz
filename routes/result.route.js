const express = require('express')
const { createResult, getResultbyUser, getAllResults } = require('../controllers/result.controller')
const { verifyToken, verifyAdmin } = require('../utils/validate')
const router = express.Router()


router.route('/all')
    .get(verifyAdmin, getAllResults)
router.route('/:id')
    .post(verifyToken, createResult)
    .get(verifyToken, getResultbyUser)
router.route('/:id')
    .get(verifyToken, getResultbyUser)


module.exports = router