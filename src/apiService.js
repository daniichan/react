// AXIOS ===> https://cursos.alura.com.br/course/react-validacao-rotas-api/task/59813

const APIService = {

    listaAutores: () => {
        return fetch('http://localhost:8000/api/autor');
    },

    criarAutor: autor => {
        return fetch('http://localhost:8000/api/autor', { method: 'POST', headers: { 'content-type': 'application/json' }, body: autor });
    },

    listaNomes: () => {
        return fetch('http://localhost:8000/api/autor/nome');
    },

    listaLivros: () => {
        return fetch('http://localhost:8000/api/autor/livro');
    },

    removeAutor: id => {
        return fetch(`http://localhost:8000/api/autor/${id}`, { method: 'DELETE', headers: { 'content-type': 'application/json' } });
    },

    trataErros: res => {
        if(!res.ok) {
            throw Error(res.responseText);
        }
        return res.json();
    }

}

export default APIService;