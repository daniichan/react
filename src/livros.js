import React, { Component, Fragment } from 'react';
import Header from './header';
import DataTable from './datatable';

class Livros extends Component {
    constructor(props) {
        super(props);

        this.state = {
            livros: [
                {
                    livro: 'React'
                },
                {
                    livro: 'Java'
                },
                {
                    livro: 'Design'
                },
                {
                    livro: 'DevOps'
                },
                {
                    livro: 'Java'
                }
            ],
            titulo: 'Livros'
        };
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
