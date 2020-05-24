import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import Header from './header';
import Tabela from './tabela';
import Formulario from './formulario';
import Styled from './styled';
import PopUp from './popup';
import APIService from './apiService';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      autores: []
    };
  }

  componentDidMount() {
    APIService.listaAutores()
              .then(res => {
                this.setState({autores: [...this.state.autores, ...res.data]})
                // ira manter os autores ja existentes no state.autores e carregar o que vem da api
              });
  }
 
  removeAutor = id => {
    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor) => {
        return autor.id !== id;
      })
    });

    PopUp.exibeMensagem('error', 'Autor removido com sucesso');
    APIService.removeAutor(id);
  }

  escutadorDeSubmit = autor => {
    APIService.criarAutor(JSON.stringify(autor))
              .then(res => res.data)
              .then(autor => {
                this.setState({ autores: [...this.state.autores, autor] });
                PopUp.exibeMensagem('success', 'Autor adicionado com sucesso.');
              });
  }

  render() {
    return (
      <Fragment>
        <Header />
        
        <div className="container mb-10">
          <h1>Casa do Código</h1>
          <Tabela autores={ this.state.autores } removeAutor={ this.removeAutor } />
          <Formulario escutadorDeSubmit={ this.escutadorDeSubmit } />
        </div>

        <Styled />
       </Fragment>
    );
  }
};

export default App;
