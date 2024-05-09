import { Author } from "../models/Author.js";
import { Book } from "../models/Book.js";

export default class BookController {

   static async getBooks(req, res) {
      try {

         res
            .status(200)
            .json(await Book.find({}))

      } catch (error) {

         res
            .status(500)
            .json({
               code: 1,
               message: `Erro interno. ${error}`
            })

      }
   }

   static async getBookById(req, res) {
      try {

         const id = req.params.id
         const book = await Book.findById(id)

         res
            .status(200)
            .json(book)

      } catch (error) {

         res
            .status(500)
            .json({
               code: 1,
               message: `Erro interno. ${error}`
            })

      }
   }

   static async searchBook(req, res) {
      try {

         const search = req.query.search
         const books = await Book.find({ title: search })

         res
            .status(200)
            .json(books)


      } catch (error) {

         res
            .status(500)
            .json({
               code: 1,
               message: `Erro interno. ${error.message}`,
               book: null
            })

      }
   }

   static async createBook(req, res) {
      try {
         const bookData = req.body
         const author = await Author.findById(req.body.author)
         const newBook = await Book.create({ ...bookData, author: author._doc })

         res
            .status(200)
            .json({
               code: 0,
               message: "Criado com sucesso!",
               book: newBook
            })

      } catch (error) {

         res
            .status(500)
            .json({
               code: 1,
               message: `Erro interno. ${error.message}`,
               book: null
            })

      }
   }

   static async replaceBook(req, res) {
      try {

         await Book.findByIdAndUpdate(req.params.id, req.body)

         res
            .status(200)
            .json({
               code: 0,
               message: "Atualizado com sucesso!",
            })

      } catch (error) {

         res
            .status(500)
            .json({
               code: 1,
               message: `Erro interno. ${error.message}`,
               book: null
            })

      }
   }

   static async deleteBook(req, res) {
      try {

         await Book.findByIdAndDelete(req.params.id)

         res
            .status(200)
            .json({
               code: 0,
               message: "Deletado com sucesso!",
            })

      } catch (error) {

         res
            .status(500)
            .json({
               code: 1,
               message: `Erro interno. ${error.message}`,
               book: null
            })

      }
   }
}