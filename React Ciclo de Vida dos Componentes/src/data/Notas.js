export default class ArrayDeNotas {
    constructor(){
        this.listaNotas = []
        this._inscritos = []
    }

    adicionarNota(titulo, texto, categoria){
        const novaNota = new Nota(titulo, texto, categoria)
        this.listaNotas.push(novaNota)
        this.notificar()
    }

    deletarNota(index){
        this.listaNotas.splice(index, 1)
        this.notificar()
    }

    inscrever(funcao){
        this._inscritos.push(funcao)
    }

    desinscrever(func){
        this._inscritos.filter(f => f !== func)
    }

    notificar(){
        this._inscritos.forEach(funcao => funcao(this.listaNotas))
    }
}

class Nota {
    constructor(titulo, texto, categoria){
        this.titulo = titulo
        this.texto = texto
        this.categoria = categoria
        console.log(this)
    }
}