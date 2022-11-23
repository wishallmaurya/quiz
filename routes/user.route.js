const express=  require('express')
const multer = require('multer')
// controllers
const { createUser, getUserById, getUsers, UserSignIn, updateById, deleteUser } = require('../controllers/user.controller')

// middlewares
const { verifyToken, verifyAdmin } = require('../utils/validate')
const router = express.Router()
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'public/uploads/');
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = multer({ storage }).single('profilePhoto');

// routes
router.post("/create" , createUser)
router.get("/" ,verifyToken, getUserById)
router.get("/all", verifyAdmin, getUsers)
router.delete("/:id" ,verifyAdmin, deleteUser)
router.put("/update/:id", verifyToken, upload, updateById)
router.post("/signin" , UserSignIn)

module.exports = router