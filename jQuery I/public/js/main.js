const tempoInicial = $('#TempoDigitacao').text()
//Contador dados frase 
const frase = $('[data-frase]').text()
const numPalavras = frase.trim().split(' ').length
const tamanhoFrase = $('#TamanhoFrase').text(numPalavras)


//Contador palavras do campo digitação
const campoDigitacao = $('[data-campo-digitacao]')
campoDigitacao.val('')


campoDigitacao.on('input', function(){

    $('#ContadorCaracteres').text(this.value.length)

    $('#ContadorPalavras').text(this.value.trim().split(/s+/g).length -1)

})


//GameOver

let tempoRestante = $('#TempoDigitacao').text()

campoDigitacao.one('focus', () => {
    var cronometroId = setInterval(() => {
        tempoRestante--
        $('#TempoDigitacao').text(tempoRestante)
        if(tempoRestante <= 0){
            campoDigitacao.attr("disabled", true)
            clearInterval(cronometroId)
        }
}, 1000)})


$('#Reiniciar').on('click', () => {
    campoDigitacao.attr('disabled', false)
    campoDigitacao.val('')
    $('#ContadorCaracteres').text(0)
    $('#ContadorPalavras').text(0)
    $('#TempoDigitacao').text(tempoInicial)
})