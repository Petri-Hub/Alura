import { ClientError } from './ClientError.js'

export class ValidationError extends ClientError{
   constructor(error, message = 'Erros de validação foram encontrados.'){

      const allErrors = Object.values(error.errors)
      const errorMessages = allErrors.map(error => error.message).join(' ')

      super(`${message} ${errorMessages}`)
   }
}