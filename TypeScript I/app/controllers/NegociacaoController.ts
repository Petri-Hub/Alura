import Negociacao from "../models/Negociacao.js"
import Negociacoes from "../models/Negociacoes.js"

export default class NegociacaoController {
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes = new Negociacoes()

    constructor(){
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
    }

    adiciona(): void{
        const negociacao = this.criaNegociacao()
        this.negociacoes.adiciona(negociacao)
        console.log(this.negociacoes.lista())
        this.limpaFormulario()
    }

    criaNegociacao(): Negociacao{
        const strDate = this.inputData.value.replace(/-/g, ",")
        const realDate = new Date(strDate)
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)
        return new Negociacao(realDate, quantidade, valor)
    }

    limpaFormulario(): void{
        this.inputData.value = ''
        this.inputQuantidade.value = '1'
        this.inputValor.value = '0.0'
        this.inputData.focus()
    }
}