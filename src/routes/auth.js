import { Router } from 'express'
import { login, signup } from '../controllers/auth.js'
import { validateUserLogin, validateUserSignin } from '../dto/user.js'

export const auth = Router()

auth
  .post('/login', validateUserLogin, login)
  .post('/signin', validateUserSignin, signup)
