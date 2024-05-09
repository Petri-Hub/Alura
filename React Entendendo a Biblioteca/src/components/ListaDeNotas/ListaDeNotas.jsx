import React, { Component } from "react";
import CardNota from "../CardNota";
import './estilo.css'

//Shift + Alt + F formata o código
//Tudo que estiver entre CHAVES {} será considerado JavaScript
class ListaDeNotas extends Component {

  render() {
    return (
      <ul className="lista">
        {this.props.notas.map((nota, index) => {
          return (
            <li key={index}>
              <div className="lista__categoria">Fodassse</div>
              <CardNota titulo={nota.titulo} texto={nota.texto}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
