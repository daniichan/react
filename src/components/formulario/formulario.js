import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormValidator from '../../utils/formValidator';
import PopUp from '../../utils/popup';

class Formulario extends Component {

    constructor(props) {
        super(props); // SUPER passa para o pai

        this.validador = new FormValidator([
            {
                campo: 'nome',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um nome.'
            },
            {
                campo: 'livro',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um livro.'
            },
            {
                campo: 'preco',
                metodo: 'isInt',
                args: [{ min: 0, max: 99999 }],
                validoQuando: true,
                mensagem: 'Entre com um valor numérico.'
            }
        ]);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
            validacao: this.validador.valido(),
        }

        this.state = this.stateInicial;
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitFormulario = () => {
        const validacao = this.validador.valida(this.state);

        if(validacao.isValid) {
            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateInicial);
        } else {
            const {nome, livro, preco} = validacao;
            const campos = [nome, livro, preco];
            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            });

            camposInvalidos.forEach( campo => {
                PopUp.exibeMensagem('error', campo.message);
            });
        }
    }

    render() {
        const { nome, livro, preco } = this.state;

        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <TextField 
                            id="nome" 
                            name="nome"
                            label="Nome" 
                            variant="outlined"
                            value={nome} 
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                    <div className="input-field col s4">
                        <TextField 
                            id="livro" 
                            name="livro"
                            label="Livro" 
                            variant="outlined"
                            value={livro} 
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                    <div className="input-field col s4">
                        <TextField 
                            id="preco" 
                            name="preco"
                            label="Preço" 
                            variant="outlined"
                            value={preco} 
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                </div>
                <button onClick={this.submitFormulario} type="button" className="waves-effect waves-light indigo lighten-2 btn">
                    Salvar
                </button>
            </form>
        );
    }
}

export default Formulario;