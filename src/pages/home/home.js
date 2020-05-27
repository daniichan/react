import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import Header from '../../components/header/header';
import Tabela from '../../components/tabela/tabela';
import Formulario from '../../components/formulario/formulario';
import Styled from '../../components/styled/styled';
import PopUp from '../../utils/popup';
import APIService from '../../utils/apiService';

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
                if(res.message === 'success') {
                  // ira manter os autores ja existentes no state.autores e carregar o que vem da api
                  this.setState({autores: [...this.state.autores, ...res.data]});
                }
              })
              .catch(err => PopUp.exibeMensagem('error', `Erro na comunicação com a API.`));
  }
 
  removeAutor = id => {
    const { autores } = this.state;

    const autoresAtualizados = autores.filter(autor => {
      return autor.id !== id;
    });

    APIService.removeAutor(id)
              .then(res => {
                if(res.message === 'deleted') {
                  this.setState({ autores: [...autoresAtualizados]});
                  PopUp.exibeMensagem('error', 'Autor removido com sucesso');
                }
              })
              .catch(err => PopUp.exibeMensagem('error', `Erro na comunicação com a API`));
  }

  escutadorDeSubmit = dados => {
    const autor = {
      nome: dados.nome,
      livro: dados.livro,
      preco: dados.preco
    }
    APIService.criarAutor(JSON.stringify(autor))
              .then(res => {
                if(res.message === 'success') {
                  this.setState({ autores: [...this.state.autores, res.data] });
                  PopUp.exibeMensagem('success', 'Autor adicionado com sucesso.');
                }
              })
              .catch(err => PopUp.exibeMensagem('error', `Erro na comunicação com a API.`));
  }

  render() {
    const campos = [
      { titulo: 'Autores', dado: 'nome'},
      { titulo: 'Livros', dado: 'livro'},
      { titulo: 'Preços', dado: 'preco'},
    ];
    return (
      <Fragment>
        <Header />
        
        <div className="container mb-10">
          <h1>Casa do Código</h1>
          <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
          <Tabela campos={campos} dados={this.state.autores} removeDados={this.removeAutor} />
        </div>

        <Styled />
       </Fragment>
    );
  }
};

export default App;
