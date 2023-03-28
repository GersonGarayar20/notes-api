import { verificarToken } from '../utils/handleJwt.js'
import { UserModel } from '../models/user.js'

export const validarSesion = async (req, res, next) => {
  // obtener token
  const token = req.headers.authorization?.split(' ').pop()
  if (!token) return res.status(401).json({ error: 'no token' })

  // verificar token
  const payload = verificarToken(token)
  if (!payload) return res.status(401).json({ error: 'token invalido' })

  // inyectar usuario
  const user = await UserModel.findById(payload.id)
  req.user = user

  next()
}
