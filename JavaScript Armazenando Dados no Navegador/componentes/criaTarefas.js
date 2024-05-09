import { carregaTarefa } from './carregaTarefas.js'
import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'

export const handleNovoItem = (evento) => {
    
    evento.preventDefault()

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [] 

    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    
    const calendario = document.querySelector('[data-calendar]')
    const data = moment(calendario.value)
    const horario = data.format('HH:mm')
    const dataFormatada = data.format('DD/MM/YYYY')
    const concluida = false

    const dados = {
        valor,
        horario,
        dataFormatada,
        concluida
    }

    const tarefasAtualizadas = [...tarefas, dados]

    const criaTarefa = Tarefa(dados)

    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))

    input.value = " "

    carregaTarefa()
}

export const Tarefa = ({ valor, horario, concluida }, id) => {

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${horario} * ${valor}</p>`
    tarefa.innerHTML = conteudo

    if(concluida === true){
        tarefa.classList.add('done')
    }
    
    tarefa.classList.add('task')
    tarefa.appendChild(BotaoConclui(carregaTarefa, id))
    tarefa.appendChild(BotaoDeleta(carregaTarefa, id))

    return tarefa
}