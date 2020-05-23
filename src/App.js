import React, { Component, Fragment } from 'react';
import './App.css';
import Tabela from './tabela';
import Formulario from './formulario';

class App extends Component {

  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      }
    ]
  };

  removeAutor = index => {
    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor, posicaoAtual) => {
        return posicaoAtual !== index;
      }) 
    });
  }

  render() {
    return (
      <Fragment>
        <Tabela autores={ this.state.autores } removeAutor={ this.removeAutor } />
        <Formulario />
      </Fragment>
    );
  }
};

export default App;
