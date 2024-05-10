import express from 'express'
import url from 'url'
import path from 'path'
import http from 'http'
import { Server } from 'socket.io'

const port = process.env.SERVER_PORT ?? 3000
const app = express()
const server = http.createServer(app)

const currentPath = url.fileURLToPath(import.meta.url)
const publicDir = path.join(currentPath, '../..', 'public')

app.use(express.static(publicDir))

server.listen(port, () => console.log('🙌 Servidor online!'))

const io = new Server(server)

export default io