import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
export default class ListaDeNotas extends Component {
 
  render() {
    return (
      <ul className="lista-notas">
        {/* CRIA UM ARRAY COM OS DADOS E DEPOIS MOSTRA CADA UM */}
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota titulo= {nota.titulo} texto ={nota.texto}/>
            </li>
          );
        })}
      </ul>
    );
  }
}
