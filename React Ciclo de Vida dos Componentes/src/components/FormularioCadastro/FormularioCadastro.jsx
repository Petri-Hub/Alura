import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {categorias: []}
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria";
  }

  componentWillUnmount(){
    const referenciaNovaCategoria = this._novasCategorias.bind(this)
    this.props.categorias.desinscrever(referenciaNovaCategoria)
  }

  componentDidMount(){
    const referenciaNovaCategoria = this._novasCategorias.bind(this)
    this.props.categorias.inscrever(referenciaNovaCategoria)
  }

  _novasCategorias(categorias){
    this.setState({...this.state, categorias})
  }

  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <select
          className="form-cadastro-input"
          onChange={this._handleMudancaCategoria.bind(this)}
        >
          <option>Sem categoria</option>
          {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
