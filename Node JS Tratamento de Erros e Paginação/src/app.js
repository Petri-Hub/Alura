import express from 'express'
import connectDatabase from './config/dbConnect.js'
import routes from './routes/index.js'
import errorHandler from './middlewares/errorHandler.js'
import notFoundHandler from './middlewares/notFoundHandler.js'

const app = express()
const connection = await connectDatabase()

routes(app)

app.use(notFoundHandler)
app.use(errorHandler)

connection.on('error', (error) => console.log('Erro de conexão: ', error))
connection.once('open', () => console.log('Conexão iniciada.'))

export default app