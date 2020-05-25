// AXIOS ===> https://cursos.alura.com.br/course/react-validacao-rotas-api/task/59813

const APIService = {

    listaAutores: () => {
        return fetch('http://localhost:8000/api/autor')
                .then(res => APIService.trataErros(res))
                .then(res => res.json());
    },

    criarAutor: autor => {
        return fetch('http://localhost:8000/api/autor', { method: 'POST', headers: { 'content-type': 'application/json' }, body: autor })
                .then(res => APIService.trataErros(res))
                .then(res => res.json());
    },

    listaNomes: () => {
        return fetch('http://localhost:8000/api/autor/nome')
                .then(res => APIService.trataErros(res))
                .then(res => res.json());
    },

    listaLivros: () => {
        return fetch('http://localhost:8000/api/autor/livro')
                .then(res => APIService.trataErros(res))
                .then(res => res.json());
    },

    removeAutor: id => {
        return fetch(`http://localhost:8000/api/autor/${id}`, { method: 'DELETE', headers: { 'content-type': 'application/json' } })
                .then(res => APIService.trataErros(res))
                .then(res => res.json());
    },

    trataErros: res => {
        if(!res.ok) {
            throw Error(res.responseText);
        }
        return res;
    }

}

export default APIService;