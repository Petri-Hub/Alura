import { Author } from "../models/Author.js";

export default class AuthorController {

   static async getAuthor(req, res) {
      try {

         res
            .status(200)
            .json(await Author.find({}))

      } catch (error) {

         res
            .status(500)
            .json({
               code: 1,
               message: `Erro interno. ${error}`
            })

      }
   }

   static async getAuthorById(req, res) {
      try {

         const id = req.params.id
         const author = await Author.findById(id)

         res
            .status(200)
            .json(author)

      } catch (error) {

         res
            .status(500)
            .json({
               code: 1,
               message: `Erro interno. ${error}`
            })

      }
   }

   static async createAuthor(req, res) {
      try {

         const newAuthor = await Author.create(req.body)

         res
            .status(200)
            .json({
               code: 0,
               message: "Criado com sucesso!",
               book: newAuthor
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

   static async replaceAuthor(req, res) {
      try {

         await Author.findByIdAndUpdate(req.params.id, req.body)

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

   static async deleteAuthor(req, res) {
      try {

         await Author.findByIdAndDelete(req.params.id)

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