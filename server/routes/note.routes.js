const NoteController = require('../controllers/note.controller')
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
    app.post("/api/notes/create-note", authenticate, NoteController.createNote)
    app.get("/api/notes/view-all-notes",authenticate, NoteController.getAllNotes)
    app.get("/api/notes/:username/get-all", authenticate, NoteController.findAllNotesByUser)
    app.get("/api/notes/view/:id",authenticate, NoteController.getOneNote)
    app.put("/api/notes/update/:id", authenticate,NoteController.updateNote)
    app.delete("/api/notes/delete/:id",authenticate, NoteController.deleteNote)
}

