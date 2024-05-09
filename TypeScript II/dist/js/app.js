import { NegociacaoController } from './controllers/NegociacaoController.js';
const negociacoesController = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    negociacoesController.adiciona();
});
