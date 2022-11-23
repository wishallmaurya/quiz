const express = require("express");
const rootRouter = express.Router();

// Routes
const authRoutes = require('./auth.route')
const userRoutes = require('./user.route')

// Routes Usage
rootRouter.use('/auth', authRoutes)
rootRouter.use('/user', userRoutes)


module.exports = rootRouter;