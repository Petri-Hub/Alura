import { NotFoundError } from '../errors/NotFoundError.js'
import { Author } from '../models/index.js'

export default class AuthorController {

   static async getAuthor(req, res, next) {
      try {

         const author = await Author.find({})

         if (!author) {
            next(new NotFoundError('Autor não encontrado.'))
            return
         }

         res
            .status(200)
            .json(author)

      } catch (error) {

         next(error)

      }
   }

   static async getAuthorById(req, res, next) {
      try {

         const id = req.params.id
         const author = await Author.findById(id)

         if(!author){
            next(new NotFoundError('Autor não encontrado.'))
            return
         }

         res
            .status(200)
            .json(author)

      } catch (error) {

         next(error)
 
      }
   }

   static async createAuthor(req, res, next) {
      try {

         const newAuthor = await Author.create(req.body)

         res
            .status(200)
            .json({
               code: 0,
               message: 'Criado com sucesso!',
               book: newAuthor
            })

      } catch (error) {

         next(error)

      }
   }

   static async replaceAuthor(req, res, next) {
      try {

         const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body)

         if(!updatedAuthor){
            next(new NotFoundError('Autor não encontrado para atualizar.'))
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

   static async deleteAuthor(req, res, next) {
      try {

         const deletedAuthor = await Author.findByIdAndDelete(req.params.id)

         if(!deletedAuthor){
            next(new NotFoundError('Autor não encontrado para deletar.'))
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