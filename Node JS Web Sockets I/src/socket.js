import io from "./server.js"

io.on('connection', (socket) => {
    console.log(`O cliente com ID ${socket.id} se conectou 👌`)

    socket.on('select_document', (docName) => {
        socket.join(docName)
    })

    socket.on('text_editor', ({ text, doc }) => {
        socket.to(doc).emit('text_editor_client', text)
    })
})

