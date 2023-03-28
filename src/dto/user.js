import { z } from 'zod'

// schema de registro
const UserSignup = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8)
})

// validar los datos de usuario
export const validateUserSignin = (req, res, next) => {
  try {
    req.body = UserSignup.parse(req.body)
    next()
  } catch (err) {
    return res.status(404).json(err)
  }
}

// schema de login
const UserLogin = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

// validar los datos para iniciar session
export const validateUserLogin = (req, res, next) => {
  try {
    req.body = UserLogin.parse(req.body)
    next()
  } catch (err) {
    return res.status(404).json(err)
  }
}
