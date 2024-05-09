export default class Categorias {
    constructor(){
        this.categorias = []
        this._inscritos = []
    }

    inscrever(funcao){
        this._inscritos.push(funcao)
    }

    notificar(){
        this._inscritos.forEach(funcao => funcao(this.categorias))
    }

    adicionaCategoria(novaCategoria){
        this.categorias.push(novaCategoria)
        this.notificar()
    }
}