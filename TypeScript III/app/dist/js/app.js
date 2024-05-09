import { NegociacaoController } from './controllers/negociacao-controller.js';
const controller = new NegociacaoController();
const form = document.querySelector('.form');
const botao = document.querySelector('#BotaoImporta');
if (botao) {
    botao.addEventListener("click", () => controller.obterNegociacoesDoDia());
}
else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}
