import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/button';

const Tabela = props => {
    const { campos, dados, removeAutor } = props;
    return(
        <Table>
            <TableHead>
                <TableRow>
                    {campos.map((campo, index) => <TableCell key={index}>{campo.titulo}</TableCell>)}
                </TableRow>
            </TableHead>

            <TableBody>
                {dados.map(dado => (
                    <TableRow key={dado.id}>
                        {campos.map((campo, index) => <TableCell key={index}>{dado[campo.dado]}</TableCell>)}
                        {/* <TableCell>
                            <Button  variant="contained" color="primary" onClick={() => removeAutor(dado.id) }>Remover</Button>
                        </TableCell> */}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default Tabela;