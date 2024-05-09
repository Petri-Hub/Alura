class Lista{
    constructor(){
        this.inputEl = document.querySelector('[data-input]')
        this.listaEl = document.querySelector('[data-lista]')
        this.buttonEl = document.querySelector('[data-button]')
        this.clearButtonEl = document.querySelector('[data-clear-button]')
        this.lista = JSON.parse(localStorage.getItem('Tarefas')) || []
        this.initialize()
    }

    initialize(){
        this.buttonEl.addEventListener('click', () => {
            this.criarTarefa()
        })

        this.clearButtonEl.addEventListener('click', () => {
            this.limparRegistro()
        })

        this.carregarTarefas()
    }

    criarTarefa(){
        let inputValue = this.inputEl.value
        if(inputValue != '' || undefined || null){
            this.lista = [...this.lista, inputValue]
            localStorage.setItem('Tarefas', JSON.stringify(this.lista))
            this.carregarTarefas()
            this.inputEl.value = ""
        } else {
            window.alert("Tá vazio essa porra aí.")
        }
    }

    carregarTarefas(){
        this.listaEl.innerHTML = ""
        if(this.lista != '' || undefined || null || []){
            this.lista.forEach(tarefa => {
                const tarefaLi = document.createElement('li')
                tarefaLi.innerHTML = `<p>${tarefa}</p><input type="button" value="Excluir" data-remove-button>`
                this.listaEl.appendChild(tarefaLi)
                let botoes = document.querySelectorAll('[data-remove-button]')
                botoes[botoes.length-1].addEventListener('click', () => {this.removerTarefa(event)})
            })
        }
    }

    removerTarefa(event){
        const botaoAlvo = event.target
        const liAlvo = botaoAlvo.parentElement
        this.lista.forEach((tarefa, index) => {
            if (tarefa == liAlvo.innerText){
                this.lista.splice(index, 1)
                localStorage.setItem('Tarefas', JSON.stringify(this.lista))
                this.carregarTarefas()
                return
            }

        })
    }

    limparRegistro(){
        this.lista = []
        localStorage.clear('Tarefas')
        this.carregarTarefas()
    }
}

let Lista1 = new Lista()