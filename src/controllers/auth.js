import { UserModel } from '../models/user.js'
import { generarToken } from '../utils/handleJwt.js'

import { compare, hash } from 'bcrypt'

// registrar un usuario
export const signup = async (req, res) => {
  const { password, ...body } = req.body

  // crear un nuevo usuario
  const user = new UserModel({
    password: await hash(password, 10),
    ...body
  })

  await user.save()

  const token = await generarToken(user.id)

  return res.json({
    token,
    user: user.set('password')
  })
}

// iniciar sesion
export const login = async (req, res) => {
  const { password, email } = req.body

  const user = await UserModel.findOne({ email })

  if (!user) { return res.status(401).json({ error: 'contraseña o usuario incorrecto' }) }

  if (user.password) {
    const check = await compare(password, user?.password)
    if (!check) {
      return res.status(401).json({ error: 'contraseña o usuario incorrecto' })
    }
  }

  const token = await generarToken(user.id)

  return res.json({
    token,
    user: user.set('password')
  })
}
