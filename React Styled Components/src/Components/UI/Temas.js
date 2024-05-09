import { textoFundoClaro, conteudoClaro, fundoClaro } from './variaveis.js'
import { textoFundoEscuro, conteudoEscuro, fundoEscuro } from './variaveis.js'

export const temaClaro = {
    body: fundoClaro,
    inside: conteudoClaro,
    text: textoFundoClaro,
    filter: ''
}

export const temaEscuro = {
    body: fundoEscuro,
    inside: conteudoEscuro,
    text: textoFundoEscuro,
    filter: 'invert()'
}