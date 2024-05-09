import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
   id: {
      type: mongoose.Schema.Types.ObjectId
   },
   title: {
      type: String,
      required: [true, 'O nome do livro é obrigatório.']
   },
   editor: {
      type: String,
      required: [true, 'A editora é obrigatória.'],
      enum: {
         values: ['Editora 2'],
         message: 'A editora {VALUE} não é válida.'
      }
   },
   price: {
      type: Number,
      required: true,
      validate: {
         validator: (value) => value >= 0 && value <= 100000,
         message: 'O número de páginas deve estar entre 10 e 5000.'
      }
   },
   pages: {
      type: Number,
      min: [10, 'O número {VALUE} de páginas deve estar acima de 10.'],
      max: [5000, 'O número {VALUE} de páginas não pode ser acima de 5000.']
   },
   author: {
      type: mongoose.Types.ObjectId,
      ref: 'authors',
      required: [true, 'O autor do livro é obrigatório.']
   }
}, { versionKey: false })

const Book = mongoose.model('books', bookSchema)

export {
   bookSchema,
   Book
} 