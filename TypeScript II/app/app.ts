import { NegociacaoController } from './controllers/NegociacaoController.js';
import NegociacoesView from './views/NegociacoesView.js';

const negociacoesController = new NegociacaoController();
const form = document.querySelector('.form');

form.addEventListener('submit', event => {
    event.preventDefault();
    negociacoesController.adiciona();
});