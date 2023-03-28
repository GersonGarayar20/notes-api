import { Router } from 'express'
import { auth } from './auth.js'
import { note } from './note.js'

export const router = Router()

router.use('/note', note)
router.use('/auth', auth)
