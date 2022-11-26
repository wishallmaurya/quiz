const express = require("express");
const rootRouter = express.Router();

// Routes
const authRoutes = require('./auth.route')
const userRoutes = require('./user.route')
const categoryRoutes = require('./category.route')
const quizModuleRoutes = require('./quiz.module.route')
const questionRoutes = require('./question.route.js')
const resultRoutes = require('./result.route')
const membershipRoutes = require('./membership.route')

// Routes Usage
rootRouter.use('/auth', authRoutes)
rootRouter.use('/user', userRoutes)
rootRouter.use('/category', categoryRoutes)
rootRouter.use('/quiz-module', quizModuleRoutes)
rootRouter.use('/question' ,questionRoutes)
rootRouter.use('/result' ,resultRoutes)
rootRouter.use('/membership' ,membershipRoutes)



module.exports = rootRouter;