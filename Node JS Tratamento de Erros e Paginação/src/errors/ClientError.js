import { BaseError } from './BaseError.js'

export class ClientError extends BaseError{
   constructor(message = 'Um ou mais dados fornecidos estão incorretos'){
      super(message, 400)
   }
}