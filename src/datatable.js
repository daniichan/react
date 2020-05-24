import React from 'react';

const DataTable = props => {

    let linhas = props.dados.map((linha, trIndex) => 
        <tr key={trIndex}>
            {props.colunas.map((coluna, tdIndex) => 
                <td key={`${tdIndex}${linha[coluna]}`}>
                    {linha[coluna]}
                </td>)
            }
        </tr>
    );

    return (
        <table className='centered highlight'>
            <thead>
                <tr>
                    <th>{props.titulo}</th>
                </tr>
            </thead>
            <tbody>
                {linhas}
            </tbody>
        </table>
    );

}
export default DataTable;