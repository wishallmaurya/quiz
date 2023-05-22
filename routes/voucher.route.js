const express = require('express')
const { createVoucher, getVoucher, deletedVoucheer, updateVoucheer, redeemVoucher,  } = require('../controllers/voucher.controller')

const { verifyToken, verifyAdmin } = require('../utils/validate')
const router = express.Router()

router.route('/')
    .post(verifyAdmin, createVoucher)
    .get(verifyAdmin, getVoucher)   

router.route('/:id')
    .put(verifyAdmin, updateVoucheer)
    .delete(verifyAdmin, deletedVoucheer)

router.route('/redeem-voucher/:id')
    .put(verifyToken , redeemVoucher)


module.exports = router
