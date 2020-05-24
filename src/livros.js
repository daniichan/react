import React, { Component, Fragment } from 'react';
import Header from './header';
import DataTable from './datatable';
import APIService from './apiService';
import PopUp from './popup';

class Livros extends Component {
    constructor(props) {
        super(props);

        this.state = {
            livros: [],
            titulo: 'Livros'
        };
    }

    componentDidMount() {
        APIService.listaLivros()
                    .then(res => APIService.trataErros(res))
                    .then(res => {
                        if(res.message === 'success') {
                            this.setState({ livros: [...this.state.livros, ...res.data]});
                        }
                    })
                    .catch(err => PopUp.exibeMensagem('error', `Erro na comunicação com a API: ${err}`));
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <h1>Livros</h1>
                    <DataTable 
                        dados={this.state.livros} 
                        titulo={this.state.titulo} 
                        colunas={['livro']}
                    />
                </div>
            </Fragment>
        );
    }
}

export default Livros;
