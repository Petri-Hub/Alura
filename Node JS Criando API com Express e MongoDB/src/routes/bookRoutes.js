import express from 'express'
import BookController from '../controllers/BookController.js'

const routes = express.Router()

routes.get('/livros', BookController.getBooks)
routes.post('/livros', BookController.createBook)
routes.get('/livros/search', BookController.searchBook)
routes.put('/livros/:id', BookController.replaceBook)
routes.get('/livros/:id', BookController.getBookById)
routes.delete('/livros/:id', BookController.deleteBook)

export default routes