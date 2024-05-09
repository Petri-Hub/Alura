import { handleNovoItem } from "./componentes/criaTarefas.js"
import { carregaTarefa } from "./componentes/carregaTarefas.js"

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)

carregaTarefa()