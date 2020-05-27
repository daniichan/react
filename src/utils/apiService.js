// AXIOS ===> https://cursos.alura.com.br/course/react-validacao-rotas-api/task/59813

const urlBase = 'http://localhost:8000/api/autor';

const consomeApi = (parametro = '', method = 'GET', body) => {
    return fetch(`${urlBase}/${parametro}`, {
        method,
        headers: { 'content-type': 'application/json' },
        body
    })
    .then(res => APIService.trataErros(res))
    .then(res => res.json());
}

const APIService = {

    listaAutores: () => consomeApi(),

    criarAutor: autor => consomeApi('', 'POST', autor),

    listaNomes: () => consomeApi(),

    listaLivros: () => consomeApi('livro'),

    removeAutor: id => consomeApi(id, 'DELETE'),

    trataErros: res => {
        if(!res.ok) {
            throw Error(res.responseText);
        }
        return res;
    }

}

export default APIService;