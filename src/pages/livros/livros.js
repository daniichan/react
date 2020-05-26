import React, { Component, Fragment } from 'react';
import Header from '../../components/header/header';
import Tabela from '../../components/tabela/tabela';
import APIService from '../../utils/apiService';
import PopUp from '../../utils/popup';

class Livros extends Component {
    constructor(props) {
        super(props);

        this.state = {
            livros: [],
        };
    }

    componentDidMount() {
        APIService.listaLivros()
                    .then(res => {
                        if(res.message === 'success') {
                            this.setState({ livros: [...this.state.livros, ...res.data]});
                        }
                    })
                    .catch(err => PopUp.exibeMensagem('error', `Erro na comunicação com a API.`));
    }

    render() {
        const campos = [{ titulo: 'Livros', dado: 'livro' }]
        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <h1>Livros</h1>
                    <Tabela 
                        dados={this.state.livros} 
                        campos={campos}
                    />
                </div>
            </Fragment>
        );
    }
}

export default Livros;
