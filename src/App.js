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
              .then(res => APIService.trataErros(res))
              .then(res => {
                if(res.message === 'success') {
                  // ira manter os autores ja existentes no state.autores e carregar o que vem da api
                  this.setState({autores: [...this.state.autores, ...res.data]});
                }
              })
              .catch(err => PopUp.exibeMensagem('error', `Erro na comunicação com a API: ${err}`));
  }
 
  removeAutor = id => {
    const { autores } = this.state;

    const autoresAtualizados = autores.filter(autor => {
      return autor.id !== id;
    });

    APIService.removeAutor(id)
              .then(res => APIService.trataErros(res))
              .then(res => {
                if(res.message === 'deleted') {
                  this.setState({ autores: [...autoresAtualizados]});
                  PopUp.exibeMensagem('error', 'Autor removido com sucesso');
                }
              })
              .catch(err => PopUp.exibeMensagem('error', `Erro na comunicação com a API: ${err}`));
  }

  escutadorDeSubmit = autor => {
    APIService.criarAutor(JSON.stringify(autor))
              .then(res => APIService.trataErros(res))
              .then(res => {
                if(res.message === 'success') {
                  this.setState({ autores: [...this.state.autores, res.data] });
                  PopUp.exibeMensagem('success', 'Autor adicionado com sucesso.');
                }
              })
              .catch(err => PopUp.exibeMensagem('error', `Erro na comunicação com a API: ${err}`));
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
