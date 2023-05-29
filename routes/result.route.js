const express = require('express')
const { createResult, getResultbyUser, getAllResults } = require('../controllers/result.controller')
const { verifyToken, verifyAdmin } = require('../utils/validate')
const router = express.Router()

router.route('/')
    .post(verifyToken, createResult)
    .get(verifyToken, getResultbyUser)
router.route('/:id')
    .get(verifyToken, getResultbyUser)

router.route('/all')
    .get(verifyAdmin, getAllResults)


module.exports = router