import React, { Component } from "react";
//Componentes
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias/";
//Dados
import Categorias from "./data/Categorias.js";
import ArrayDeNotas from "./data/Notas";
//Estilização
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          criarNota={this.notas.adicionarNota.bind(this.notas)}
          categorias={this.categorias}
        />
        <main className="conteudo__principal">
          <ListaDeCategorias
            categorias={this.categorias}
            adicionaCategoria={this.categorias.adicionaCategoria.bind(this.categorias)}
          />
          <ListaDeNotas
            notas={this.notas}
            apagarNota={this.notas.deletarNota.bind(this.notas)}
          />
        </main>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;
