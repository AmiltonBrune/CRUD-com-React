import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create/create.components';
import Edit from './components/edit/edit.component';
import Index from './components/index/index.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Agenda de Contatos</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Tela Inical</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Criar Novo Contato</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Lista de Contatos</Link>
                </li>
              </ul>
            </div>
          </nav> <br />
          <h2>Seja Bem Vindo a Sua Agenda de Contatos</h2> <br />
          <Switch>
            <Route exact path='/create' component={Create} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/index' component={Index} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
