//Caso for utlizar um Component é preciso realizar sua exportação também, como mostrado abaixo
import React, { Component } from "react";
import './estilo.css'

class FormularioCadastro extends Component {
  constructor(props){
    super(props)
    this.titulo = "";
    this.texto = "";
  }

  _handleMudancaTitulo(evento){
    evento.stopPropagation()
    this.titulo = evento.target.value
  }

  _handleMudancaTexto(evento){
    evento.stopPropagation()
    this.texto = evento.target.value
  }

  _criarCard(evento){
    evento.preventDefault()
    evento.stopPropagation()
    this.props.criarCard(this.titulo, this.texto)
  }

  render() {
    return (
      <form className="formulario"
        onSubmit={this._criarCard.bind(this)}
      >
        <input
         className="forumlario__input__titulo" 
         type="text" 
         placeholder="Título do Cartão"
         onChange={this._handleMudancaTitulo.bind(this)}
         />
        <textarea 
          rows={15}
          placeholder="Escreva sua nota" 
          className="forumlario__input__texto"
          onChange={this._handleMudancaTexto.bind(this)}
          ></textarea>
        <button
          type="submit"
          className="formulario__botao">Criar nota</button>
      </form>
    );
  }
}

export default FormularioCadastro