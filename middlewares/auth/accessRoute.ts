// const asyncError = require('express-async-handler')
// const jwt = require('jsonwebtoken')
import jwt from "jsonwebtoken"
import {
  isTokenIncluded,
  getAccessTokenFromHeader,
} from '../../helpers/auth/tokenHelper'
import User from '../../model/user'
import { log, chalk } from '../../controllers/comment/comment'

export const getAccessToRoute = async (req, res, next) => {
  const { JWT_SECRET } = process.env

  if (!isTokenIncluded(req, next)) {
    log(chalk("no token found"))
    next("no token found")
  }

  const accessToken = getAccessTokenFromHeader(req, next)

  if (accessToken === 'null') {

    next("accessToken is null")
  } else if (accessToken != 'null') {
    console.log(accessToken)
    const decoded = jwt.verify(accessToken, JWT_SECRET)

    console.log(`decoded jsonwebtoken ${decoded}`)

    const user = await User.findById(decoded.id)
    console.log(`in accessroute ${user}`)
    if (!user) {
      console.log('no user')
      return res.status(201).json({
        success: false,
        message: 'No user found',
      })
    }

    req.user = user
    next()
  }
}

