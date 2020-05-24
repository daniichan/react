import React, { Fragment, Component } from 'react';
import Header from './header';
import DataTable from './datatable';
import APIService from './apiService';
import PopUp from './popup';

class Autores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nomes: [],
            titulo: 'Autores'
        }
    }

    componentDidMount() {
        APIService.listaNomes()
                    .then(res => APIService.trataErros(res))
                    .then(res => {
                        if(res.message === 'success') {
                            this.setState({ nomes: [...this.state.nomes, ...res.data]});
                        }
                    })
                    .catch(err => PopUp.exibeMensagem('error', `Erro na comunicação com a API.`));
    }

    render() {
        return(
            <Fragment>
                <Header />
                <div className='container'>
                    <h1>Autores</h1>
                    <DataTable
                        dados={this.state.nomes}
                        titulo={this.state.titulo}
                        colunas={['nome']}
                    />
                </div>
            </Fragment>
        );
    }
}

export default Autores;