import { Book, Author } from '../models/index.js'
import { NotFoundError } from '../errors/NotFoundError.js'
import { ClientError } from '../errors/ClientError.js'

export default class BookController {

   static async getBooks(req, res, next) {
      try {

         let { limit = 5, page = 1, sortField = '_id', sort = -1 } = req.query

         limit = parseInt(limit)
         page = parseInt(page)

         if (Number.isNaN(limit) || limit < 0) {
            next(new ClientError())
            return
         }

         if (Number.isNaN(page) || page < 0) {
            next(new ClientError())
            return
         }

         const books = await Book.find()
            .sort({ [sortField]: sort })
            .skip((page - 1) * limit)
            .limit(limit)
            .populate('author')
            .exec()

         res
            .status(200)
            .json(books)

      } catch (error) {

         next(error)

      }
   }

   static async getBookById(req, res, next) {
      try {

         const id = req.params.id
         const book = await Book.findById(id)

         if (!book) {
            next(new NotFoundError('Livro não encontrado.'))
            return
         }

         res
            .status(200)
            .json(book)

      } catch (error) {

         next(error)

      }
   }

   static async searchBook(req, res, next) {
      try {

         const { editor, title, minPages, maxPages, author } = req.query

         const search = {}

         if (editor) search.editor = editor
         if (title) search.title = new RegExp(`${title}`, 'i')

         if (minPages || maxPages) search.pages = {}

         if (minPages) search.pages = { ...search.pages, $gte: minPages }
         if (maxPages) search.pages = { ...search.pages, $lte: maxPages }

         if (author) {
            const bookAuthor = await Author.findOne({ name: author })
            const authorID = bookAuthor?._id

            if (authorID) search.author = authorID
         }

         const books = await Book.find({
            title: title,
            editor: editor
         })

         res
            .status(200)
            .json(books)

      } catch (error) {

         next(error)

      }
   }

   static async createBook(req, res, next) {
      try {
         const bookData = req.body
         const author = await Author.findById(req.body.author)
         const newBook = await Book.create({ ...bookData, author: author._doc })

         res
            .status(200)
            .json({
               code: 0,
               message: 'Criado com sucesso!',
               book: newBook
            })

      } catch (error) {

         next(error)

      }
   }

   static async replaceBook(req, res, next) {
      try {

         const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body)

         if (!updatedBook) {
            next(new NotFoundError('Livro não encontrado para atualizar.'))
            return
         }

         res
            .status(200)
            .json({
               code: 0,
               message: 'Atualizado com sucesso!',
            })

      } catch (error) {

         next(error)

      }
   }

   static async deleteBook(req, res, next) {
      try {

         const deletedBook = await Book.findByIdAndDelete(req.params.id)

         if (!deletedBook) {
            next(new NotFoundError('Livro não encontrado para deletar.'))
            return
         }

         res
            .status(200)
            .json({
               code: 0,
               message: 'Deletado com sucesso!',
            })

      } catch (error) {

         next(error)

      }
   }
}