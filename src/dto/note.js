import { z } from 'zod'

const Note = z.object({
  title: z.string(),
  description: z.string()
})

// validar datos para crear una nota
export const validateCreateNote = (req, res, next) => {
  try {
    req.body = Note.parse(req.body)
    next()
  } catch (err) {
    return res.status(404).json(err)
  }
}
