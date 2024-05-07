
// const express = require("express")
import express from "express"

const router = express.Router()



import authRoute from './auth'
// const userRoute = require('./userRoute')
// const storyRoute = require('./storyRoute')
// const commentRoute = require('./commentRoute')

router.use("/auth", authRoute)
// router.use('/user', userRoute)
// router.use('/story', storyRoute)
// router.use('/comment', commentRoute)
//
export default router
