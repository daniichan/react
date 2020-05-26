import React, { Fragment } from 'react';
import Header from '../../components/header/header';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Sobre = () => {
    return(
        <Fragment>
            <Header />
            <Container maxWidth="sm">
                <Typography variant="h1" component="h2">Sobre</Typography>
                <p>
                    A Casa do Código é uma editora que desenvolve e edita livros em diversos formatos.
                </p>
            </Container>
        </Fragment>
    );
}

export default Sobre;