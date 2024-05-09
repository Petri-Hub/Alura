import express from 'express'
import connectDatabase from './config/dbConnect.js';
import routes from './routes/index.js';

const app = express()
const connection = await connectDatabase()

routes(app)

connection.on('error', (error) => console.log('Erro de conexão: ', error))
connection.once('open', () => console.log('Conexão iniciada.'))

app.delete('/livros/:id', (req, res) => {
   const bookId = Number(req.params.id)
   const bookIndex = getBookIndex(bookId)

   books.splice(bookIndex, 1)

   res.status(200).json(books)
})

export default app