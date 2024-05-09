import React, { Component } from "react";
import './estilo.css'

class CardNota extends Component {
  render() {
    return (
      //O correto é sempre utilizar o atributo className em vez de class, pois o React pode confundir com o termo "class" da linguagem JavaScript
      <section className="card">
        <header>
          <h3 className="card__titulo">{this.props.titulo}</h3>
        </header>
        <p className="card__texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota

