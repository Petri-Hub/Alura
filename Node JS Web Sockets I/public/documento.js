import { emitTextEditorTypeing } from "./socket-documento.js"
import { selectDocument } from "./socket-documento.js"

const searchParams = new URLSearchParams(window.location.search)
const docName = searchParams.get('nome')

const textarea = document.querySelector('#editor-texto')
const title = document.querySelector('#titulo-documento')

title.textContent = docName ?? "Documento sem título"

textarea.addEventListener('keyup', ({ target }) => {
    emitTextEditorTypeing({
        text: target.value,
        doc: docName
    })
})

selectDocument(docName)

export const updateTextAreaText = (text) => {
    textarea.value = text
}