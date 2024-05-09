import express from 'express'
import AuthorController from '../controllers/AuthorController.js'

const routes = express.Router()

routes.get('/authors', AuthorController.getAuthor)
routes.post('/authors', AuthorController.createAuthor)
routes.put('/authors/:id', AuthorController.replaceAuthor)
routes.get('/authors/:id', AuthorController.getAuthorById)
routes.delete('/authors/:id', AuthorController.deleteAuthor)

export default routes