import { updateTextAreaText } from "./documento.js"

const socket = io()

export const emitTextEditorTypeing = ({ text, doc }) => {
    socket.emit('text_editor', {
        text,
        doc
    })
}

export const selectDocument = (document) => {
    socket.emit('select_document', document)
}

socket.on('text_editor_client', (text) => updateTextAreaText(text))