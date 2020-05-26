import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Tabela extends Component {
    render() {
        const { autores, removeAutor } = this.props;

        return(
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Autores</TableCell>
                        <TableCell>Livros</TableCell>
                        <TableCell>Preços</TableCell>
                        <TableCell>Remover</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {autores.map(autor => (
                        <TableRow key={autor.id}>
                            <TableCell>{ autor.nome }</TableCell>
                            <TableCell>{ autor.livro }</TableCell>
                            <TableCell>{ autor.preco }</TableCell>
                            <TableCell>
                                <button
                                    onClick={() => {
                                        removeAutor(autor.id)
                                    }}>
                                    Remover</button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }        
}

export default Tabela;