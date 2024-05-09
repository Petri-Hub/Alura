import { BaseError } from './BaseError.js'

export class NotFoundError extends BaseError{
   constructor(message = 'Serviço não encontrado.'){
      super(message, 404)
   }
}