import mongoose from 'mongoose'
import { BaseError } from '../errors/BaseError.js'
import { ClientError } from '../errors/ClientError.js'
import { ValidationError } from '../errors/ValidationError.js'

// eslint-disable-next-line no-unused-vars
export default (error, req, res, next) => {

   if(error instanceof BaseError){
      error.sendError(res)
      return
   }

   if (error instanceof mongoose.Error.CastError) {
      new ClientError().sendError(res)
      return
   }

   if (error instanceof mongoose.Error.ValidationError) {
      new ValidationError(error).sendError(res)
      return
   }

   new BaseError().sendError(res)
}