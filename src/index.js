import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Filmes from './pages/filmes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Filmes />
  </React.StrictMode>,
  document.getElementById('root')
);

// Se você deseja que seu aplicativo funcione offline e carregue mais rápido, você pode alterar
// cancele o registro () para registrar () abaixo. Observe que isso traz algumas armadilhas.
// Saiba mais sobre service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();