import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './pages/home/home';
import Sobre from './pages/sobre/sobre';
import Livros from './pages/livros/livros';
import Autores from './pages/autores/autores';
import NotFound from './pages/notFound/notFound';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={App} />
      <Route path='/sobre' component={Sobre} />
      <Route path='/livros' component={Livros} />
      <Route path='/autores' component={Autores} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
