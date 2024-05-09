import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const bookSchema = new mongoose.Schema({
   id: {
      type: mongoose.Schema.Types.ObjectId
   },
   title: {
      type: String,
      required: true
   },
   editor: String,
   price: Number,
   pages: Number,
   author: authorSchema
}, { versionKey: false })

const Book = mongoose.model('books', bookSchema)

export {
   bookSchema,
   Book
}