import React, { Fragment, Component } from 'react';
import Header from '../../components/header/header';
import DataTable from '../../components/datatable/datatable';
import APIService from '../../utils/apiService';
import PopUp from '../../utils/popup';

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