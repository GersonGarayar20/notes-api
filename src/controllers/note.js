import { NoteModel } from '../models/note.js'

// buscar todas las notas
export const findAll = async (req, res) => {
  const user = req.user.id
  const notes = await NoteModel.find({ user })
  return res.json(notes)
}

// buscar una nota
export const findOne = async (req, res) => {
  try {
    const _id = req.params.id
    const user = req.user.id

    const note = await NoteModel.findOne({ _id, user })
    console.log(note)
    return res.json(note)
  } catch (err) {
    return res.status(404).json({ error: 'no se encontro la nota' })
  }
}

// funciones nuevas
// buscar una nota por su nombre
// buscar notas por fechas

// crear una nota
export const create = async (req, res) => {
  const newNote = new NoteModel({
    user: req.user.id,
    ...req.body
  })

  const note = await newNote.save()
  return res.status(201).json(note)
}

// eliminar una nota
export const remove = async (req, res) => {
  try {
    const _id = req.params.id
    const user = req.user.id
    await NoteModel.findOneAndDelete({ _id, user })
    return res.json({ message: 'nota eliminada' })
  } catch (err) {
    return res.status(404).json({ error: 'no se encontro la nota' })
  }
}

// actulizar una nota
export const update = async (req, res) => {
  try {
    const _id = req.params.id
    const user = req.user.id
    const note = await NoteModel.findOneAndUpdate({ _id, user }, req.body, { new: true })
    return res.json(note)
  } catch (err) {
    return res.status(404).json({ error: 'no se encontro la nota' })
  }
}
