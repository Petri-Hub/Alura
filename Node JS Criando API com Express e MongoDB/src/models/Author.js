import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
   id: mongoose.Types.ObjectId,
   name: { 
      type: String, 
      required: true 
   },
   nationality: String
}, { versionKey: false })

const Author = mongoose.model('authors', authorSchema)

export {
   authorSchema,
   Author
}