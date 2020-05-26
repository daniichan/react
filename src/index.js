import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './pages/home/home';
import Sobre from './pages/sobre/sobre';
import Livros from './pages/livros/livros';
import Autores from './pages/autores/autores';
import NotFound from './pages/notFound/notFound';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={App} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/livros' component={Livros} />
        <Route path='/autores' component={Autores} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
  , document.getElementById('root')
);