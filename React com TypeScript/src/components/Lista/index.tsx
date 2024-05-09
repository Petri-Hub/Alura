import React from 'react';
import './style.scss'

interface tarefa{
  nome: string,
  tempo: string
}

export default function Lista() {
  const tarefas: tarefa[] = [
    { nome: 'React', tempo: '01:00:00' },
    { nome: 'JavaScript', tempo: '04:00:00' },
  ];

  function createTarefaHTML(tarefa: tarefa, index: number) {
    return (
      <li key={index} className="item">
        <h3>{tarefa.nome}</h3>
        <span>{tarefa.tempo}</span>
      </li>
    );
  }

  return (
    <aside className='listaTarefas'>
      <h2>Estudos do dia</h2>
      <ul>{tarefas.map(createTarefaHTML)}</ul>
    </aside>
  );
}
