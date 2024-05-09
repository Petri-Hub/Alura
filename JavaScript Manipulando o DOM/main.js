//Para não deixarmos o usuário acessar nosso código podemos utilizar uma função para armazenar no sso código dentro de um escopo de uma função anônima, para isso utilizamos a seguinte linha (()=>{x})() na onde todo nosso código deve ser alocado no local de X, dentro da função
import BotaoDeleta from "./componentes/deletaTarefa.js";
import SucessButton from "./componentes/concluirTarefa.js";

const button = document.querySelector("[data-form-button]");
const input = document.querySelector("[data-form-input]");
const list = document.querySelector("[data-list]");

const criarTarefa = (evento) => {
    evento.preventDefault();

    let valor = input.value;
    
    const conteudo = `<p class="content">${valor}</p>`;
    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    tarefa.innerHTML = conteudo;
    tarefa.appendChild(SucessButton());
    tarefa.appendChild(BotaoDeleta());

    list.appendChild(tarefa);
    input.value = "";
}

button.addEventListener('click', criarTarefa);


