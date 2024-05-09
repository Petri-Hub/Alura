import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/";
import Formulario from "./components/FormularioCadastro/";
import "./assets/App.css";
import "./assets/index.css";

//Não é possível devolver duas tag adjacentes dentro de um componenete React, por isso, é necessário sempre adicionar uma tag de "Wrap" que permita o retorno de apenas um elemento

class App extends Component {
  constructor() {
    super();
    this.notas = [];
    this.state = {
      notas:[]
    };
  }

  criarCard(titulo, texto) {
    const novaNota = {
      titulo,
      texto,
    };
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  render() {
    return (
      <section className="main">
        <Formulario criarCard={this.criarCard.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
