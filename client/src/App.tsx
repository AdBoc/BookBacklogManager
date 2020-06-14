import * as React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { history } from './_helpers/history';

import MainPage from './components/MainPage/MainPage';
import NavBar from './components/NavBar/NavBar';
import Backlog from './components/Backlog/Backlog';

import './App.css';

const App: React.FC = () => {
  return (
    <Router history={history}>
      <NavBar />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/backlog' component={Backlog} />
        <Route exact path='/login' component={() => <div>Component not ready yet</div>} />
        <Route component={() => <Redirect to='/' />} />
      </Switch>
    </Router>
  );
}

export default App;
