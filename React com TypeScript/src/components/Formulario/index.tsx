import React from "react";
import Botao from "../Button";
import './style.scss'

export default class Formulario extends React.Component {
  render(): React.ReactNode {
    return (
      <form className="novaTarefa">
        <div className="inputContainer">
        <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            name="tarefa"
            id="tarefa"
            type="text"
            placeholder="O que você quer estudar?"
            required
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="tempo">Tempo</label>
          <input
            name="tempo"
            id="tempo"
            type="time"
            step="1"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao />
      </form>
    )
  }
}