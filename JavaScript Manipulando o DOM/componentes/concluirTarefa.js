const SucessButton = () => {
    const sucessButton = document.createElement('button');
    sucessButton.classList.add('check-button');
    sucessButton.innerText = "Feito";

    sucessButton.addEventListener('click', concluirTarefa);

    return sucessButton;
}

const concluirTarefa = (evento) => {
    const sucessButton = evento.target
    const tarefaCompleta = sucessButton.parentElement
    tarefaCompleta.classList.toggle('done')
}

export default SucessButton