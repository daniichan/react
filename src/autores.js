import React, { Fragment, Component } from 'react';
import Header from './header';
import DataTable from './datatable';

class Autores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            autores: [
                {
                    autor: 'Paulo',
                },
                {
                    autor: 'Daniel',
                },
                {
                    autor: 'Marcos',
                },
                {
                    autor: 'Bruno',
                },
                {
                    autor: 'Nico',
                }
            ],
            titulo: 'Autores'
        }
    }

    render() {
        return(
            <Fragment>
                <Header />
                <div className='container'>
                    <h1>Autores</h1>
                    <DataTable
                        dados={this.state.autores}
                        titulo={this.state.titulo}
                        colunas={['autor']}
                    />
                </div>
            </Fragment>
        );
    }
}

export default Autores;