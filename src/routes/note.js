import { Router } from 'express'
import { create, findAll, findOne, remove, update } from '../controllers/note.js'
import { validateCreateNote } from '../dto/note.js'
import { validarSesion } from '../middleware/session.js'

export const note = Router()

note
  .get('/', validarSesion, findAll)
  .get('/:id', validarSesion, findOne)
  .post('/', validarSesion, validateCreateNote, create)
  .put('/:id', validarSesion, update)
  .delete('/:id', validarSesion, remove)
